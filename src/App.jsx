import React, { useContext } from 'react'
import Sidebar from "./components/sidebar.jsx";
import Player from './components/player.jsx';
import Display from './components/display.jsx';
import { PlayerContext } from './context/playerContext.jsx';

// Componente principal de la aplicación
const App = () => {

    // Se obtiene el contexto del reproductor, específicamente la referencia al audio y la pista actual
    const {audioRef, track} = useContext(PlayerContext)

    return (
        // Contenedor principal de la aplicación
        <div className='h-screen bg-black'>
            
            {/* Contenedor para la vista principal (sidebar + display) */}
            <div className='h-[90%] flex'>
                {/* Componente de la barra lateral */}
                <Sidebar />
                {/* Componente que muestra el contenido principal */}
                <Display />
            </div>
            
            {/* Componente del reproductor que está en la parte inferior */}
            <Player />
            
            {/* Elemento de audio que se enlaza a 'audioRef' y tiene como fuente la pista actual */}
            {/* 'preload="auto"' hace que el navegador cargue el archivo de audio de forma anticipada */}
            <audio ref={audioRef} src={track.file} preload='auto'></audio>
        </div>
    )
}

export default App
