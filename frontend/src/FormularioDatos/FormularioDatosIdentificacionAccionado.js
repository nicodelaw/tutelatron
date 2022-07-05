import React from "react";
import './Formulario.css'

function FormularioDatosIdentificacionAccionado (props) {
    return(
        <form className="formulario">
            <label>Nombre:</label>
            <input id='nombreAccionado' onChange={()=>props.setnombreAccionado(document.getElementById('nombreAccionado').value) }></input>
            <label>Tipo de documento:</label>
            <select id='tipoDocumentoAccionado' onClick={()=>{props.settipoDocumentoAccionado(document.getElementById('tipoDocumentoAccionado').value)}}>
                <option value='Sin documento'>Seleccionar</option>            
                <option value='Cédula de Ciudadanía'>Cédula de ciudadanía</option>
                <option value='Tarjeta de Identidad'>Tarjeta de Identidad</option>
                <option value='Pasaporte'>Pasaporte</option>
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