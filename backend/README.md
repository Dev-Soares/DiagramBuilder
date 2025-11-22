# Diagram-service

Repositório da API de microsserviço responsável por corresponder o Frontend `[./modeler-service]` .
RESTful construído com Node Express + MongoDB schemas para armazenar JSON vindos e direcionados à porta de entrada da aplicação.


## Dev ⚙️

Para iniciar o projeto em modo de desenvolvimento:

1.  Certifique-se de que o Docker Desktop está rodando.

2.  Na raiz do projeto, execute:

    ``docker compose up``

3.  A aplicação já estará rodando com nodemon, fazendo com que suas alterações sejam aplicadas de forma instantânea

Para encerrar o ambiente, use: `docker compose down`.

OU:

Use a extensão devContainers na sua IDE de preferência `(devcontainer.json)`

---

### Rotas implementadas:

 `GET /api/diagram` cria token e redireciona o navegador para /diagram/:token

`GET /api/diagram/:token` (ROTA INTERNA) compara e valida token


### Rotas à implementar:

`GET /api/diagram/templates/` fornece informações atualizadas sobre as variáveis das infraestruturas

`POST /api/diagram/:token/export` valida templates e armazena



// NOTAS SOBRE CONSUMO DO AUTHSERVICE PARA O FRONTEND

## Exemplo de authContext para fetch no token:

```javascript
// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';

// --- Criação do contexto de autenticação ---
const AuthContext = createContext();

// --- Provedor de autenticação ---
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null); // Armazena o token JWT
  const [loading, setLoading] = useState(true); // Indica se o token está sendo carregado

  /**
   * Função para buscar o token JWT do backend
   * @param {number} diagramId - ID do diagrama para gerar token limitado
   */
  const fetchToken = async (diagramId) => {
    try {
      // Requisição para o endpoint que gera o token
      const response = await fetch(`/api/get-limited-token?diagramId=${diagramId}`);
      if (!response.ok) throw new Error('Falha ao buscar o token');

      const data = await response.json();
      setToken(data.token); // Armazena o token no estado
    } catch (error) {
      console.error(error);
      setToken(null);
    } finally {
      setLoading(false); // Finaliza o estado de carregamento
    }
  };

  // Exemplo de busca automática de token no carregamento do componente
  useEffect(() => {
    const diagramId = 123; // ID do diagrama de exemplo
    fetchToken(diagramId);
  }, []);

  return (
    <AuthContext.Provider value={{ token, loading, fetchToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// --- Hook para consumir o contexto de autenticação ---
export const useAuth = () => useContext(AuthContext);
```

## Exemplo de uso:

```javascript
import { useAuth } from './context/AuthContext';

function DiagramViewer({ diagramId }) {
  const { token, loading, fetchToken } = useAuth();

  // Busca o token sempre que o diagramId mudar
  useEffect(() => {
    if (diagramId) fetchToken(diagramId);
  }, [diagramId]);

  if (loading) return <p>Carregando token...</p>;
  if (!token) return <p>Falha ao carregar token</p>;

  // Exemplo de uso do token em um iframe que consome o serviço
  return (
    <iframe
      src={`https://seu-servico-de-diagramas.com/view?token=${token}`}
      width="100%"
      height="600px"
      title="Visualizador de Diagrama"
    />
  );
}
```