import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/theme.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import CreateDiagram from './pages/CreateDiagram'
import DiagramArea from './pages/DiagramArea'
import { DiagramProvider } from './contexts/DiagramContext.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { AlertProvider } from './contexts/AlertContext.jsx'
import axios from 'axios'
import TokenExpiredPage from './pages/TokenExpiredPage.jsx';
import GetDiagram from './pages/GetDiagram.jsx';


axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AlertProvider>
    <AuthProvider>
      <DiagramProvider>
      <Routes>
        <Route
          path='/'
          element={
            <MainPage />
          }
        />
        
          <Route
            path='/create-diagram'
            element={
              <CreateDiagram />
            }
          />
          <Route
            path='/diagram/:id'
            element={
                <DiagramArea />
            }
          />
          <Route
            path='/token-expired'
            element={
                <TokenExpiredPage />
            }
          />
          <Route
            path='/get-diagram'
            element={
                <GetDiagram />
            }
          />
        

      </Routes>
      </DiagramProvider>
      </AuthProvider>
      </AlertProvider>
    </BrowserRouter>
  </StrictMode>,
)