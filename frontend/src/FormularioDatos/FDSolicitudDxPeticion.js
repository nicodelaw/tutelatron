import React from "react";

function FDSolicitudDxPeticion (props){
    if(props.tipoDerechoDePeticion == 'Seleccionar'){
        return(null)
    } 
    else if(props.tipoDerechoDePeticion == 'SolicitudInformacion'){
        return(
            <form class="">
                <label>¿Qué información se solicitó?</label>
                <textarea></textarea>
            </form>
        )
    }
    else if(props.tipoDerechoDePeticion == 'SolicitudDocumentos'){
            return(
                <form class="">
                    <label>¿Qué documento o documentos fueron solicitados?</label>
                    <textarea></textarea>
                </form>
            )
    }
    else if(props.tipoDerechoDePeticion == 'SolicitudConsulta'){
            return(
                <form class="">
                    <label>¿Qué consulta se hizo a la entidad?</label>
                    <textarea></textarea>
                </form>
            )
    } else{
        return(null)
    }
}

export { FDSolicitudDxPeticion };