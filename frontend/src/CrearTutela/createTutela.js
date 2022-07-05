import React from "react";
//import { downloadTutela } from './downloadTutela';
import { descargarTutela } from "./descargarTutela";
import './boton.css'

const CreateTutela = (props) =>{
    return(
        <button action="/add" method="post" type="submit"
            // onClick={()=>{descargarTutela(props)}}
            className="botonDescarga"
        > 
            Descargar 
        </button>   
    )
}

export { CreateTutela };