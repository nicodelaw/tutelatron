import React, { useState } from "react";
import { enviaralBackend } from '../EnviarBackend/EnviarBackend';
import './boton.css'

const BotonDescarga = (props) => {
    const [botonDescarga, setBotonDescarga] = useState(false);
    let contador = 2;
    const intervaloDescarga = () =>{
        let id = window.setInterval(function(){
            contador--;
            if (contador < 0){
                console.log('ya')
                setBotonDescarga(true)
                window.clearInterval(id)
            }
        }, 1000)
    }

    if (botonDescarga==false){
        return(
            <div>
            <button action="/descargar" method="post" type="submit"
                    onClick={()=>{
                       enviaralBackend(props);
                       intervaloDescarga()
                    }}
                    className="botonCrear"
                >
                        Crear Tutela
            </button>    
            </div>
        );
    } else{
        return(
            <div>
            <button action="/descargar" method="post" type="submit"
                    onClick={()=>{
                       enviaralBackend(props);
                       intervaloDescarga();
                    }}
                    className="botonCrear"
                >
                        Crear Tutela
            </button> 
            <button className="botonDescarga"
                onClick={()=>{
                    window.location.href="http://localhost:3000/download"
                    setBotonDescarga(false);
                }}
            >
                Descargar
            </button>
            
            </div>    
        );
    }    
}

export { BotonDescarga };