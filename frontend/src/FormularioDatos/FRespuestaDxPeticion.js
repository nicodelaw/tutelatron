import React from "react";

function FRespuestaDxPeticion(props){
    if(props.respuestaDerechoDePeticion == 0){
        return(null)
    }
    else{
        return(
            <div class="d-flex flex-column col-5">
                <label>Fecha de respuesta del derecho de petición:</label>
                <input 
                    type="date"
                    id="fechaRespuestaDerechoDePeticion"
                    onChange={()=>props.setFechaRespuestaDerechoDePeticion(document.getElementById('fechaRespuestaDerechoDePeticion').value)}
                />
                <label>El derecho de petición fue contestado, pero:</label>
                <select id="contenidoRespuestaPeticion" onChange={()=>props.setcontenidoRespuestaDerechoPeticion(document.getElementById('contenidoRespuestaPeticion').value)}>
                    <option value={0}></option>
                    <option value={1}>De forma incompleta</option>
                    <option value={2}>Con evasivas y sin resolver de fondo</option>
                    <option value={3}>De forma incompleta, con evasivas y sin resolver de fondo </option>
                    <option value={4}>Solicitando tiempo adicional</option>
                </select>


            </div>
        )
    }
}

export { FRespuestaDxPeticion };