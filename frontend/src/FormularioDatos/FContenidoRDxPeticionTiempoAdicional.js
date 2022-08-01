import React from "react";

function FContenidoRDxPeticionTiempoAdicional(props){
    if(!props.respuestaTiempoAdicional){
        return(null)
    }
    else{
        return(
            <div class="d-flex flex-column col-5">
                <label>Fecha de respuesta del derecho de petición:</label>
                <input 
                    type="date"
                    id="fechaRespuestaDerechoDePeticionTAdicional"
                    onChange={()=>props.setFechaRespuestaDerechoDePeticionTAdicional(document.getElementById('fechaRespuestaDerechoDePeticionTAdicional').value)}
                />
                <label>El derecho de petición fue contestado, pero:</label>
                <select id="contenidoRespuestaPeticionTAdicional" onChange={()=>props.setContenidoRespuestaPeticionTAdicional(document.getElementById('contenidoRespuestaPeticionTAdicional').value)}>
                    <option value={0}></option>
                    <option value={1}>De forma incompleta</option>
                    <option value={2}>Con evasivas y sin resolver de fondo</option>
                    <option value={3}>De forma incompleta, con evasivas y sin resolver de fondo </option>
                </select>
            </div>
        )
    }
}

export { FContenidoRDxPeticionTiempoAdicional }