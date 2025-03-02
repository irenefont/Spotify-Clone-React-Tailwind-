import React from "react";
import { useNavigate } from "react-router-dom";

// Componente que representa un álbum en la lista de álbumes
const AlbumItem = ({ image, name, desc, id }) => {

    // Hook de navegación para redirigir a la página del álbum seleccionado
    const navigate = useNavigate();

    return(
        <div 
            onClick={()=> navigate(`/album/${id}`)} 
            className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
        >
            {/* Imagen del álbum */}
            <img className="rounded" src={image} alt="" />

            {/* Nombre del álbum */}
            <p className="font-bold mt-2 mb-1">{name}</p>

            {/* Descripción del álbum */}
            <p className="text-slate-200 text-sm">{desc}</p>
        </div>
    )
}

export default AlbumItem;
