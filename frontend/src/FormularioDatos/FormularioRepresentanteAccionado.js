import React from "react";

function FormularioRepresentanteAccionado (props){
    if(props.tipoPersonaAccionado == 0){
        return(null)
    } else {
        return(
            <form className="formulario" class="d-flex flex-column col-4">
                <h2>Datos Representante</h2>
                <label>Nombre Representante:</label>
                <input class="form-control-file" id='nombreRepresentanteAccionadoID' onChange={()=>props.setnombreRepresentanteAccionado(document.getElementById('nombreRepresentanteAccionadoID').value) }></input>
                <label>Tipo de documento Representante:</label>
                <select id='tipoDocumentoRepresentanteAccionado' onChange={()=>{props.settipoDocumentoRepresentanteAccionado(document.getElementById('tipoDocumentoRepresentanteAccionado').value) }}>
                    <option value='Sin documento'>Seleccionar</option>            
                    <option value='Cédula de Ciudadanía'>Cédula de ciudadanía</option>
                    <option value='Pasaporte'>Pasaporte</option>
                </select>
                <label>Número de documento Representante:</label>
                <input id='numeroDocumentoRepresentanteAccionado' onChange={()=>props.setnumeroDocumentoRepresentanteAccionante(document.getElementById('numeroDocumentoRepresentanteAccionado').value) }></input>
                <label>Dirección de notificaciones:</label>
                <input id='direccionRepresentanteAccionado' onChange={()=>props.setdireccionRepresentanteAccionado(document.getElementById('direccionRepresentanteAccionado').value) }></input>
                <label>Correo electrónico:</label>
                <input id='correoRepresentanteAccionado' onChange={
                    ()=>{
                            props.setcorreoRepresentanteAccionado(document.getElementById('correoRepresentanteAccionado').value);
                        }
                    }
                ></input>
            </form>
        )
    }
}

export { FormularioRepresentanteAccionado };