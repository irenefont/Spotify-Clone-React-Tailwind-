import React, {useContext} from "react";
import { PlayerContext } from "../context/playerContext";

// Componente que muestra la información de una canción
const SongItem = ( {name, image, desc, id }) => {

    // Se obtiene la función playWithId del contexto PlayerContext
    const {playWithId} = useContext(PlayerContext)

    return(
        // Cuando de click, se ejecuta la función playWithId con el id del item, así que reproduce la canción
        <div onClick={()=>playWithId(id)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
            <img className="rounded" src={image} alt="" />
            <p className="font-bold mt-2 mb-1">{name}</p>
            <p className="text-slate-200 text-sm">{desc}</p>
        </div>
    )
}

export default SongItem;