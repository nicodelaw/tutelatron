import React from "react";
import './Formulario.css'

const FormularioDatosIdentificacionAccionante = (props) =>{ 

    if (props.tipoDocumentoAccionante == 'Tarjeta de Identidad'){
        props.setMayoriaEdadAccionante(false)
    }else{
        props.setMayoriaEdadAccionante(true)
    }

    return(
        <form className="formulario">
            <label>Nombre:</label>
            <input id='nombreAccionanteID' onChange={()=>props.setnombreAccionante(document.getElementById('nombreAccionanteID').value) }></input>
            <label>Tipo de documento:</label>
            <select id='tipoDocumentoAccionante' onChange={()=>{props.settipoDocumentoAccionante(document.getElementById('tipoDocumentoAccionante').value) }}>
                <option value='Sin documento'>Seleccionar</option>            
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
        </form>
    );
};

export { FormularioDatosIdentificacionAccionante };