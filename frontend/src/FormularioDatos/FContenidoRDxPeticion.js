import React from "react";

// yeah, i do tried to do this with switch, but somehow it didnt work

function FContenidoRDxPeticion(props){

    if(props.contenidoRespuestaDerechoPeticion == 0){
        props.setJustificacionDerechoDePeticion('_____________')
        return(null) 
    }
    else if(props.contenidoRespuestaDerechoPeticion == 1){
        
        return(
            <form class="form-group"> 
                <label>¿Qué solicitud faltó por resolver?</label>
                <textarea id="textAreaIncompleto" onChange={()=>{props.setJustificacionDerechoDePeticion(document.getElementById('textAreaIncompleto').value)}}></textarea>
            </form>
        )
    }
    else if(props.contenidoRespuestaDerechoPeticion == 2){
        return(
            <form class="form-group">
                <label>¿Por qué la respuesta es evasiva y no resuelve de fonto la petición?</label>
                <textarea id="textAreaEvasivas" onChange={()=>{props.setJustificacionDerechoDePeticion(document.getElementById('textAreaEvasivas').value)}}></textarea>
            </form>
        )
    }
    else if(props.contenidoRespuestaDerechoPeticion == 3){
        return(
            <form class="form-group">
                <label>¿Por qué la respuesta es incompleta, con evasivas y sin resolver de fondo?</label>
                <textarea id="textAreaEvasivasIncompleta" onChange={()=>{props.setJustificacionDerechoDePeticion(document.getElementById('textAreaEvasivasIncompleta').value)}}></textarea>
            </form>        
            )
    }
    else if(props.contenidoRespuestaDerechoPeticion == 4){
        return(
           <div>
                <label>¿Cuánto tiempo adicional solicitó?</label>
                <input id="textInput" onChange={()=>{props.setJustificacionDerechoDePeticion(document.getElementById('textInput').value)}}></input>
                <label>¿Se contestó el Derecho de Petición dentro de ese término?</label>
                <select id="respuestaTiempoAdicional" onClick={()=>props.setRespuestaTiempoAdicional(document.getElementById('respuestaTiempoAdicional').value)}>
                    <option value={0}>No</option>
                    <option value={1}>Sí</option>
                </select>
            </div>
        )
    }
    else {
        return(null)
    }
    
}

export { FContenidoRDxPeticion };