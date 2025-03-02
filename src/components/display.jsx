import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./displayHome.jsx";
import DisplayAlbum from "./displayAlbum.jsx";
import { albumsData } from "../assets/assets.js";


const Display = () => {

/* 'useRef' Guarda una referencia del elemento que se le especifique, en este caso, quiero referenciar a todo mi div
que despliega todos mis elementos */
    const displayRef = useRef(); 

    // Guarda una ruta
    const location = useLocation();

    // Guarda un booleano que verifica si la ruta incluye la palabra 'album'
    const isAlbum = location.pathname.includes('album');

    // Guarda el id del album
    const albumId = isAlbum ? location.pathname.slice(-1) : ''; //Condicional: si es true, cumple lo que haya a la izquierda de los dos puntos

    //Guarda el color de fondo del album con el ID seleccionado
    const bgColor = albumsData[Number(albumId)].bgColor;

    // Cambia el color de fondo a un degradado si estamos en un album
    useEffect(() => {
        if (isAlbum) {
            displayRef.current.style.background = `linear-gradient(${bgColor},#121212 )`;
        } 
        else {
            displayRef.current.style.background = `#121212`;
        }
    })
    
    return (
        <div ref={displayRef} className="w-[100%] m-2 px-6 pt-4 rounded bg-spotify-black text-white overflow-auto lg:w-[75%] lg:ml-0">
            {/* 'Routes' maneja la navegación entre las distintas rutas */}
            <Routes>
                {/* Ruta para la página principal, que se muestra cuando la URL es '/' */}
                <Route path='/' 
                    element={<DisplayHome />} 
                />
                {/* Ruta para los álbumes específicos. El ':id' es un parámetro dinámico */}
                {/* Este ID se pasará al componente DisplayAlbum para mostrar el álbum correspondiente */}
                <Route path='/album/:id' 
                    element={<DisplayAlbum />} 
                />
            </Routes>
        </div>
    )
}    

export default Display;