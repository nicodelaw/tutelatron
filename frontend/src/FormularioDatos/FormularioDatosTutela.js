import React from "react";
import { FDSolicitudDxPeticion } from './FDSolicitudDxPeticion';

const FormularioDatosTutela = (props) =>{

    return(
        <form className="formulario" class="d-flex flex-column col-5">
            <label>Derechos Fundamentales vulnerados:</label>
            <select  id="tipoTutelaOption" onClick={()=>props.setTipoTutela(document.getElementById('tipoTutelaOption').value)}>
                <option value='Seleccionar'>Seleccionar</option>            
                <option value='Derecho de Petición' >Derecho de Petición</option>
            </select>
            <label>Tipo de Derecho de Petición radicado:</label>
            <select  id="tipoDerechoDePeticionOption" onClick={()=>props.setTipoDerechoDePeticion(document.getElementById('tipoDerechoDePeticionOption').value)}>
                <option value='__________'>Seleccionar</option>            
                <option value='SolicitudInformacion' >Solicitud de Información</option>
                <option value='SolicitudDocumentos' >Solicitud de Documentos</option>
                <option value='SolicitudConsulta' >Consulta</option>
            </select>
            <FDSolicitudDxPeticion 
                tipoDerechoDePeticion={props.tipoDerechoDePeticion}
                contenidoRespuestaDerechoPeticionTEXTO={props.contenidoRespuestaDerechoPeticionTEXTO}
                tipoDerechoDePeticionInformacion={props.tipoDerechoDePeticionInformacion}
                tipoDerechoDePeticionDocumentos={props.tipoDerechoDePeticionDocumentos}
                tipoDerechoDePeticionConsulta={props.tipoDerechoDePeticionConsulta}
                setTipoDerechoDePeticionInformacion={tipoDerechoDePeticionInformacion=>props.setTipoDerechoDePeticionInformacion(tipoDerechoDePeticionInformacion)}
                setTipoDerechoDePeticionDocumentos={tipoDerechoDePeticionDocumentos=>props.setTipoDerechoDePeticionDocumentos(tipoDerechoDePeticionDocumentos)}
                setTipoDerechoDePeticionConsulta={tipoDerechoDePeticionConsulta=>props.setTipoDerechoDePeticionConsulta(tipoDerechoDePeticionConsulta)}
                setContenidoRespuestaDerechoPeticionTEXTO={contenidoRespuestaDerechoPeticionTEXTO =>props.setContenidoRespuestaDerechoPeticionTEXTO(contenidoRespuestaDerechoPeticionTEXTO)}
            />
            <label>Fecha de radicación del Derecho de Petición:</label>
            <input 
                type="date" 
                id="fechaRadicacionDerechoPeticion"
                onChange={()=>props.setFechaRadicacionDerechoPeticion(document.getElementById('fechaRadicacionDerechoPeticion').value)}
            />
            <label>Municipio donde se radicó el Derecho de Petición:</label>
            <input id="municipioRadicacionDerechoPeticionOption" onClick={()=>props.setMunicipioRadicacionDerechoPeticion(document.getElementById('municipioRadicacionDerechoPeticionOption').value)}>
            </input>
            <label>¿Se contestó el Derecho de Petición?</label>
            <select id="respuestaDerechoDePeticion" onClick={()=>props.setRespuestaDerechoDePeticion(document.getElementById('respuestaDerechoDePeticion').value)}>
                <option value={0}>No</option>
                <option value={1}>Sí</option>
            </select>
        </form>
    )
}

export { FormularioDatosTutela };