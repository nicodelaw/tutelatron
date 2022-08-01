import React from "react";

// yeah, i do tried to do this with switch, but somehow it didnt work

function FContenidoRDxPeticion(props){

    if(props.contenidoRespuestaDerechoPeticion == 0){
        return(null)
    }
    else if(props.contenidoRespuestaDerechoPeticion == 1){
        return(
            <form class="form-group">
                <label>¿Qué solicitud faltó por resolver?</label>
                <textarea></textarea>
            </form>
        )
    }
    else if(props.contenidoRespuestaDerechoPeticion == 2){
        return(
            <form class="form-group">
                <label>¿Por qué no hubo una respuesta al fondo del asunto?</label>
                <textarea></textarea>
            </form>
        )
    }
    else if(props.contenidoRespuestaDerechoPeticion == 3){
        return(
            <form class="form-group">
                <label>¿Qué solicitud faltó por resolver?</label>
                <textarea></textarea>
                <label>¿Por qué no hubo una respuesta al fondo del asunto?</label>
                <textarea></textarea>
            </form>        
            )
    }
    else if(props.contenidoRespuestaDerechoPeticion == 4){
        return(
           <div>
                <label>¿Cuánto tiempo adicional solicitó?</label>
                <input></input>
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