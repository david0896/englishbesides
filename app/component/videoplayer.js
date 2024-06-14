"use client"
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
 
 const videoplayer = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            {!loading ?
                <ReactPlayer
                    className=" shadow-xl shadow-black"
                    url="https://www.youtube.com/watch?v=P05bT0o1e7M"
                    controls
                />
            : <div>Cargando...</div>
            }
        </>
    )
 }
 
 export default videoplayer