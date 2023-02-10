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
                <br />
                <button action="/descargar" method="post" type="submit"
                        onClick={()=>{
                        enviaralBackend(props);
                        intervaloDescarga()
                        }}
                        className="botonCrear"
                        class="btn btn-dark"
                    >
                            Crear Tutela
                </button>    
            </div>
        );
    } else{
        return(
            <div>
                <br />
                <button className="botonDescarga" class="btn btn-success"
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