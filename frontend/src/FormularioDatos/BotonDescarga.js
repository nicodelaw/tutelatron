import React from "react";
import { enviaralBackend } from '../EnviarBackend/EnviarBackend';
import './boton.css'

const BotonDescarga = (props) => {
    return(
        <button action="/add" method="post" type="submit"
            onClick={()=>{enviaralBackend(props);}}
            className="botonDescarga"
        > 
            Descargar 
        </button> 
    );
}

export { BotonDescarga };