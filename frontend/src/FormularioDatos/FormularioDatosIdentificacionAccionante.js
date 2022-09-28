import React from "react";

const FormularioDatosIdentificacionAccionante = (props) =>{ 

    if (props.tipoDocumentoAccionante == 'Tarjeta de Identidad'){
        props.setMayoriaEdadAccionante(false)
    }else{
        props.setMayoriaEdadAccionante(true)
    }

    return(
        <form className="formulario" class="d-flex flex-column col-5">
            <label>Nombre:</label>
            <input class="form-control-file" id='nombreAccionanteID' onChange={()=>props.setnombreAccionante(document.getElementById('nombreAccionanteID').value) }></input>
            <label>Tipo de documento:</label>
            <select id='tipoDocumentoAccionante' onChange={()=>{props.settipoDocumentoAccionante(document.getElementById('tipoDocumentoAccionante').value) }}>
                <option value='____________'>Seleccionar</option>            
                <option value='Cédula de Ciudadanía'>Cédula de ciudadanía</option>
                <option value='Tarjeta de Identidad'>Tarjeta de Identidad</option>
                <option value='Pasaporte'>Pasaporte</option>
            </select>
            <label>Número de documento:</label>
            <input id='numeroDocumentoAccionante' onChange={()=>props.setnumeroDocumentoAccionante(document.getElementById('numeroDocumentoAccionante').value) }></input>
            <label>Domicilio:</label>
            <input id='domicilioAccionante' onChange={()=>props.setdomicilioAccionante(document.getElementById('domicilioAccionante').value) }></input>
            <label>Dirección de notificaciones:</label>
            <input id='direccionAccionante' onChange={()=>props.setdireccionAccionante(document.getElementById('direccionAccionante').value) }></input>
            <label>Correo electrónico:</label>
            <input id='correoAccionante' onChange={()=>props.setcorreoAccionante(document.getElementById('correoAccionante').value) }></input>
            <label>¿Actúa por medio de apoderado?</label>
            <select 
                id='actuaporapoderado' 
                onChange={()=>{props.setActuaApoderado(document.getElementById('actuaporapoderado').value)}}
                >
                <option value={0}>No</option>
                <option value={1}>Sí</option>
            </select>
        </form>
    );
};

export { FormularioDatosIdentificacionAccionante };