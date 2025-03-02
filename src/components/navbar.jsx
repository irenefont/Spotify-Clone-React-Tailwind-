import React from "react"; // Importamos React para poder usar componentes
import { assets } from "../assets/assets"; // Importamos los assets (iconos, imágenes, etc.)
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para manejar la navegación entre páginas

const Navbar = () => {

    const navigate = useNavigate(); // Hook de React Router para cambiar de página

    return (
        <>
        {/* Contenedor principal de la navbar */}
        <div className="w-full flex justify-between items-center font-semibold">
            {/* Sección de navegación hacia atrás y adelante */}
            <div className="flex items-center gap-2">
                {/* Botón para ir a la página anterior */}
                <img onClick={()=>navigate(-1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_left} alt="" />
                {/* Botón para ir a la página siguiente */}
                <img onClick={()=>navigate(+1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_right} alt="" />
            </div>
            <div className="flex items-center gap-4">
                {/* Botón de explorar premium (solo visible en pantallas medianas y grandes) */}
                <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">Explore premium</p>
                {/* Botón para instalar la aplicación */}
                <p className="bg-black py-1 px-3 rounded-2xl text-size[15px] cursor-pointer">Install App</p>
                {/* Ícono de perfil representado por una letra "I" */}
                <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">I</p>
            </div>
        </div>

        {/* Sección de categorías (filtros de contenido) */}
        <div className="flex items-center gap-2 mt-4">
            <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
            <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
            <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Podcasts</p>
        </div>
        </>
    );
}

export default Navbar; // Exportamos el componente