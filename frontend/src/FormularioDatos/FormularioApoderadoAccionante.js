import React from "react";

function FormularioApoderadoAccionante(props){
    if (props.actuaApoderado == 0){
        return(null)
    }
    else{
        return(
            <form className="formulario" class="d-flex flex-column col-4">
                <h2>Datos apoderado</h2>
                <label>Nombre Apoderado:</label>
                <input class="form-control-file" id='nombreApoderadoAccionanteID' onChange={()=>props.setnombreApoderadoAccionante(document.getElementById('nombreApoderadoAccionanteID').value) }></input>
                <label>Tipo de documento Apoderado:</label>
                <select id='tipoDocumentoApoderadoAccionante' onChange={()=>{props.settipoDocumentoAccionante(document.getElementById('tipoDocumentoApoderadoAccionante').value) }}>
                    <option value='Sin documento'>Seleccionar</option>            
                    <option value='Cédula de Ciudadanía'>Cédula de ciudadanía</option>
                    <option value='Pasaporte'>Pasaporte</option>
                </select>
                <label>Número de documento Apoderado:</label>
                <input id='numeroDocumentoApoderadoAccionante' onChange={()=>props.setnumeroDocumentoApoderadoAccionante(document.getElementById('numeroDocumentoApoderadoAccionante').value) }></input>
                <label>Dirección de notificaciones:</label>
                <input id='direccionApoderadoAccionante' onChange={()=>props.setdireccionApoderadoAccionante(document.getElementById('direccionApoderadoAccionante').value) }></input>
                <label>Correo electrónico:</label>
                <input id='correoApoderadoAccionante' onChange={
                    ()=>{
                            props.setcorreoApoderadoAccionante(document.getElementById('correoApoderadoAccionante').value);
                        }
                    }
                ></input>
            </form>
        )
    };
}

export { FormularioApoderadoAccionante }