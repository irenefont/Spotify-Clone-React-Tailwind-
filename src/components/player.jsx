import React, {useContext} from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/playerContext"; // Importamos el contexto del reproductor


const Player = () => {

    // Extraemos del contexto las variables y funciones necesarias para controlar el reproductor
    const {track, seekBar, seekBg,playStatus, play, pause, time, previous, next, seekSong} = useContext(PlayerContext)

    return (
        // Contenedor principal del reproductor
        <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">

            {/* Sección izquierda: Información de la canción */}
            <div className="hidden lg:flex items-center gap-4">
                <img className="w-12" src={track.image} alt="" /> {/* Imagen del track */}
                <div>
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0, 12)}</p>  {/* Descripción corta del track */}
                </div>
            </div>

            {/* Sección central: Controles de reproducción */}
            <div className="flex flex-col items-center gap-1 m-auto">
                <div className="flex gap-4">
                    <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt=""/> {/* Botón de aleatorio */}
                    <img onClick={previous} className="w-4 cursor-pointer" src={assets.prev_icon} alt=""/> {/* Botón de canción anterior */}
                    {/* Botón de Play/Pause dinámico según el estado */}
                    {playStatus ? 
                    <img onClick={pause} className="w-4 cursor-pointer" src={assets.pause_icon} alt=""/>
                    : <img onClick={play} className="w-4 cursor-pointer" src={assets.play_icon} alt=""/>
                    }
                    <img onClick={next} className="w-4 cursor-pointer" src={assets.next_icon} alt=""/> {/* Botón de siguiente */}
                    <img className="w-4 cursor-pointer" src={assets.loop_icon} alt=""/> {/* Botón de repetir */}
                </div>

                {/* Barra de progreso y tiempo de reproducción */}
                <div className="flex items-center gap-5">
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p> {/* Tiempo actual */}
                    <div ref={seekBg} onClick={seekSong} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"> {/* Barra de progreso */}
                        <hr ref={seekBar} className="h-1 border-none w-0 bg-green-800 rounded-full" /> {/* Indicador de progreso */}
                    </div>
                    <p>{time.totalTime.minute}:{time.totalTime.second}</p> {/* Tiempo total */}
                </div>
            </div>

            {/* Sección derecha: Controles adicionales (solo en pantallas grandes) */}
            {/* Botones */}
            <div className="hidden lg:flex items-center gap-2 opacity-75">
                <img className="w-4" src={assets.plays_icon} alt="" />
                <img className="w-4" src={assets.mic_icon} alt="" />
                <img className="w-4" src={assets.queue_icon} alt="" />
                <img className="w-4" src={assets.speaker_icon} alt="" />
                <img className="w-4" src={assets.volume_icon} alt="" />
                <div className="w-20 bg-slate-50 h-1 rounded"></div>
                <img className="w-4" src={assets.mini_player_icon} alt="" />
                <img className="w-4" src={assets.zoom_icon} alt="" />
            </div>
        </div>
    );
}

export default Player; // Exportamos el componente