import React, {useContext} from "react";
import Navbar from "./navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/playerContext";

// Componente que muestra la información de un álbum específico
const DisplayAlbum = () => {

    // Obtiene el parámetro de la URL que representa el ID del álbum
    const {id} = useParams();
    
    // Obtiene los datos del álbum correspondiente al ID proporcionado
    const albumData = albumsData[id];
    
    // Obtiene la función playWithId del contexto para reproducir canciones
    const {playWithId} = useContext(PlayerContext);

    return (
        <>
            {/* Renderiza la barra de navegación en la parte superior */}
            <Navbar/>
            
            {/* Sección de información del álbum */}
            <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
                {/* Imagen del álbum */}
                <img className="w-48 rounded" src={albumData.image} alt="" />
                
                {/* Datos del álbum */}
                <div className="flex flex-col">
                    <p>Playlist</p>
                    <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <p className="mt-1">
                        {/* Logo de Spotify y detalles adicionales */}
                        <img className="inline-block w-5" src={assets.spotify_logo} alt=""/>
                        <b className="pl-2 pr-2">Spotify</b>
                        • 1,323,145 likes
                        • <b>50 songs, </b>
                        about 2 hr 30 min
                    </p>
                </div>
            </div>
            
            {/* Encabezados de la lista de canciones */}
            <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
                <p><b className="mr-4">#</b>Title</p>
                <p>Album</p>
                <p className="hidden sm:block">Date added</p>
                <img className="m-auto w-4" src={assets.clock_icon} alt=""/>
            </div>
            
            {/* Línea divisoria */}
            <hr/>
            
            {/* Lista de canciones del álbum */}
            {
                songsData.map((item,index)=>(
                    <div 
                        onClick={()=>playWithId(item.id)} 
                        key={index} 
                        className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
                        
                        {/* Número de canción, imagen y título */}
                        <p className="text-white">
                            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
                            <img className="inline w-10 mr-5" src={item.image}/>
                            {item.name}
                        </p>
                        
                        {/* Nombre del álbum */}
                        <p className="text-[15px]">{albumData.name}</p>
                        
                        {/* Fecha de agregado (visible solo en pantallas grandes) */}
                        <p className="text-[15px] hidden sm:block">5 days ago</p>
                        
                        {/* Duración de la canción */}
                        <p className="text-[15px] text-center">{item.duration}</p>
                    </div>
                ))
            }
        </>
    );
}

export default DisplayAlbum;
