import { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { useLayoutEffect } from 'react';
import { flushSync } from 'react-dom';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => { 

    const [token, setToken] = useState(localStorage.getItem('diagram_token') || null);

    const createToken = useCallback(async (id) => {

        try {
            const response = await axios.post(`/diagram/generate-token/${id}`);
            const newToken = response.data.token;
            
            localStorage.setItem('diagram_token', newToken);

            flushSync(() => {
                setToken(newToken);
            });
            
            return newToken; 
        } catch (error) {
            console.error('Erro ao criar token:', error);
            return null;
        }
    }, []); // sem dependências - função estável

    const contextValue = useMemo(() => ({
        token,
        createToken,
    }), [token, createToken]); 

    useLayoutEffect(() => {

        const authInterceptor = axios.interceptors.request.use((config => {
            config.headers.Authorization = token 
            ? `Bearer ${token}`  
            : config.headers.Authorization;
            return config;
        })
        );

        return () => {
            axios.interceptors.request.eject(authInterceptor);
        };
    }, [token]); //garante que o token sempre va na headers da req


    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};