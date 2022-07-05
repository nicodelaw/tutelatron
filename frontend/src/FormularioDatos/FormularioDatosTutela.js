import React from "react";

const FormularioDatosTutela = (props) =>{
    
    if (!props.respuestaDerechoDePeticion){
         <div></div>       
    }else{
        <input 
            type="date"
            id="fechaRespuestaDerechoDePeticion"
            onChange={()=>props.setFechaRespuestaDerechoDePeticion(document.getElementById('fechaRespuestaDerechoDePeticion').value)}
        />
    }

    return(
        <form className="formulario">
            <select  id="tipoTutelaOption" onClick={()=>props.setTipoTutela(document.getElementById('tipoTutelaOption').value)}>
                <option value='Seleccionar'>Seleccionar</option>            
                <option value="Derecho de Petición" >Derecho de Petición</option>
            </select>
            <select  id="tipoDerechoDePeticionOption" onClick={()=>props.setTipoDerechoDePeticion(document.getElementById('tipoDerechoDePeticionOption').value)}>
                <option value='Seleccionar'>Seleccionar</option>            
                <option value="SolicitudInformacion" >Solicitud de Información</option>
                <option value="SolicitudDocumentos" >Solicitud de Documentos</option>
                <option value="SolicitudConsulta" >Consulta</option>
            </select>
            <input 
                type="date" 
                id="fechaRadicacionDerechoPeticion"
                onChange={()=>props.setFechaRadicacionDerechoPeticion(document.getElementById('fechaRadicacionDerechoPeticion').value)}
            />
            <select id="municipioRadicacionDerechoPeticionOption" onClick={()=>props.setMunicipioRadicacionDerechoPeticion(document.getElementById('municipioRadicacionDerechoPeticionOption').value)}>
                <option value='Seleccionar'>Seleccionar</option>            
                <option value="Bogotá">Bogotá</option>
                <option value="Cartagena">Cartagena</option>
            </select>
            <p>¿Se contestó el Derecho de Petición?</p>
            <label>Sí</label>
            <input type="checkbox" onClick={()=>props.setRespuestaDerechoDePeticion(true)} />
            <label>No</label>
            <input type="checkbox" onClick={()=>props.setRespuestaDerechoDePeticion(false)} />

        </form>
    )
}

export { FormularioDatosTutela };