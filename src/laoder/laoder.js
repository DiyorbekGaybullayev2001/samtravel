import React from "react";
import vdstart  from '../laoder/vidio start/video2.mp4'


const Loader = () =>{

    return (
        <div>
            <video autoPlay muted className="w-full h-[100vh] object-cover "> <source src={vdstart}/></video>
        </div>
    )
}

export default Loader