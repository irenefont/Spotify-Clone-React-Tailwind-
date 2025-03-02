import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";


/* Este código crea un "proveedor de contexto" para el reproductor de música. 
En React, un contexto sirve para compartir datos entre componentes sin tener 
que pasarlos manualmente a través de props. */

const PlayerContext = createContext();

const PlayerContextProvider = ( props ) => { // Props es un objeto que contiene las propiedades del componente.
    
    const audioRef = useRef() // useRef() crea una referencia mutable que se puede utilizar para almacenar valores mutables en la propiedad current.
    const seekBg = useRef() // Referencia a la barra de progreso de la canción.
    const seekBar = useRef() 

    const [track, setTrack] = useState(songsData[0]) 
    const [playStatus, setPlayStatus] = useState(false)
    const [time, setTime] = useState({
        currentTime: {
            second:0,
            minute:0
        },
        totalTime: {
            second:0,
            minute:0
        }
    })

    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const playWithId  = async (id) => { // async indica que una función contiene operaciones asíncronas (que pueden tardar tiempo)
        await setTrack(songsData[id]); // await pausa la ejecución hasta que la operación asíncrona termine
        await audioRef.current.play();
        setPlayStatus(true);
    }

    const previous = async () => { 
        if (track.id>0) { // Verifica que no sea la primera canción.
            await setTrack(songsData[track.id-1])
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const next = async () => {
        if (track.id < songsData.length-1) { // Verifica que no sea la última canción.
            await setTrack(songsData[track.id+1])
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    // Función para mover la posición de la canción según la barra de progreso.
    const seekSong = async (e) => {
        // Calcula la nueva posición del tiempo en función del click en la barra de progreso.
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration);
    }
    useEffect(() => {
        setTimeout(() => { // setTimeout ejecuta una función después de esperar un tiempo determinado.
            
            audioRef.current.ontimeupdate = () => { // ontimeupdate es un evento que se autoejecuta mientras se reproduce un audio o video.
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+'%';
                setTime({
                    currentTime: {
                        second:Math.floor(audioRef.current.currentTime % 60), // Math.floor redondea hacia abajo.
                        minute:Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime: {
                        second:Math.floor(audioRef.current.duration % 60),
                        minute:Math.floor(audioRef.current.duration / 60)
                    }
                })
            }

        }, 1000); // 1000 milisegundos = 1 segundo. Cada segundo se actualiza el tiempo de la canción.
    },[audioRef])

    const contextValue = { // El objeto que tiene todas las referencias y funciones que se compartirán
        audioRef,
        seekBg,
        seekBar,
        track,setTrack,
        playStatus,setPlayStatus,
        time,setTime,
        play,pause,
        playWithId,
        previous,next,
        seekSong
    }
    
    return (
        // Pasamos todos los datos y funciones a través de value={contextValue} y todos sus hijos tendrán acceso a ellos.
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

// Exportamos el contexto y su proveedor para ser utilizados en otros componentes.
export { PlayerContext, PlayerContextProvider };