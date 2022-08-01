import React from "react";

function FormularioDatosIdentificacionAccionado (props) {
    return(
        <form className="formulario" class="d-flex flex-column col-5">
            <label>Nombre:</label>
            <input id='nombreAccionado' onChange={()=>props.setnombreAccionado(document.getElementById('nombreAccionado').value) }></input>
            <label>¿Es persona jurídica?</label>
            <select id='tipoPersonaAccionado' onClick={()=>{props.setTipoPersonaAccionado(document.getElementById('tipoPersonaAccionado').value)}}>
                <option value={0}>No</option>
                <option value={1}>Sí</option>
            </select>
            <label>Tipo de documento:</label>
            <select id='tipoDocumentoAccionado' onClick={()=>{props.settipoDocumentoAccionado(document.getElementById('tipoDocumentoAccionado').value)}}>
                <option value='Sin documento'>Seleccionar</option>            
                <option value='Cédula de Ciudadanía'>Cédula de ciudadanía</option>
                <option value='Tarjeta de Identidad'>Tarjeta de Identidad</option>
                <option value='Pasaporte'>Pasaporte</option>
                <option value='NIT'>NIT</option>
            </select>
            <label>Número de documento:</label>
            <input id='numeroDocumentoAccionado' onChange={()=>props.setnumeroDocumentoAccionado(document.getElementById('numeroDocumentoAccionado').value) }></input>
            <label>Domicilio:</label>
            <input id='domicilioAccionado' onChange={()=>props.setdomicilioAccionado(document.getElementById('domicilioAccionado').value) }></input>
            <label>Dirección de notificaciones:</label>
            <input id='direccionAccionado' onChange={()=>props.setdireccionAccionado(document.getElementById('direccionAccionado').value) }></input>
            <label>Correo electrónico:</label>
            <input id='correoAccionado' onChange={()=>props.setcorreoAccionado(document.getElementById('correoAccionado').value) }></input>
        </form>
    )

}

export { FormularioDatosIdentificacionAccionado }