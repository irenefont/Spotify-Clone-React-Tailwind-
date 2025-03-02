import React from 'react'; 
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Importa los estilos globales de la aplicación
import App from './App.jsx';  // Importa el componente principal de la aplicación
import { BrowserRouter } from 'react-router-dom';  // Importa el componente BrowserRouter para manejar las rutas
import { PlayerContextProvider } from './context/playerContext.jsx';  // Importa el proveedor del contexto del reproductor

// Se crea y renderiza el árbol de componentes de React en el contenedor con id 'root'
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* StrictMode es una herramienta de desarrollo que ayuda a identificar problemas en el ciclo de vida del componente */}
    <BrowserRouter>
      {/* BrowserRouter envuelve la aplicación para permitir el enrutamiento basado en el navegador */}
      <PlayerContextProvider>
        <App />
        {/* El componente principal 'App' es el que se renderiza */}
      </PlayerContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
