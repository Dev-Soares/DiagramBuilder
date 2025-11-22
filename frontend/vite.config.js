import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({

    jsxRuntime: 'automatic',
     
    }), tailwindcss()],
  server: {
    // Configuração crucial para o Docker
    watch: {
      usePolling: true,
    },
    // Garante que o servidor seja acessível de fora do container
    host: true, 

    allowedHosts: [
      'diagram-dev.platformcode.ai',
      'localhost',
      '127.0.0.1'
    ]
  }
})
