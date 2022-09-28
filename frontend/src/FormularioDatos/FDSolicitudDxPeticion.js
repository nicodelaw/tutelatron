import React from "react";

function FDSolicitudDxPeticion (props){
    if(props.tipoDerechoDePeticion == '__________'){
        props.setTipoDerechoDePeticionInformacion(false)
        props.setTipoDerechoDePeticionDocumentos(false)
        props.setTipoDerechoDePeticionConsulta(false)
        return(null)
    } 
    else if(props.tipoDerechoDePeticion == 'SolicitudInformacion'){
        props.setTipoDerechoDePeticionInformacion(true)
        props.setTipoDerechoDePeticionDocumentos(false)
        props.setTipoDerechoDePeticionConsulta(false)
        return(
            <form class="">
                <label>¿Qué información se solicitó?</label>
                <textarea id="areaTextoInformacion" onChange={()=>props.setContenidoRespuestaDerechoPeticionTEXTO(document.getElementById('areaTextoInformacion').value)}></textarea>
            </form>
        )
    }
    else if(props.tipoDerechoDePeticion == 'SolicitudDocumentos'){
            props.setTipoDerechoDePeticionInformacion(false)
            props.setTipoDerechoDePeticionDocumentos(true)
            props.setTipoDerechoDePeticionConsulta(false)
            return(
                <form class="">
                    <label>¿Qué documento o documentos fueron solicitados?</label>
                    <textarea id="areaTextoDocumentos" onChange={()=>props.setContenidoRespuestaDerechoPeticionTEXTO(document.getElementById('areaTextoDocumentos').value)}></textarea>
                </form>
            )
    }
    else if(props.tipoDerechoDePeticion == 'SolicitudConsulta'){
            props.setTipoDerechoDePeticionInformacion(false)
            props.setTipoDerechoDePeticionDocumentos(false)
            props.setTipoDerechoDePeticionConsulta(true)
            return(
                <form class="">
                    <label>¿Qué consulta se hizo a la entidad?</label>
                    <textarea id="areaTextoConsulta" onChange={()=>props.setContenidoRespuestaDerechoPeticionTEXTO(document.getElementById('areaTextoConsulta').value)}></textarea>
                </form>
            )
    } else{
        return(null)
    }
}

export { FDSolicitudDxPeticion };