import React, { props } from "react";

const enviaralBackend = (props) =>{

    const nombreAccionante = props.nombreAccionante;
    const tipoDocumentoAccionante = props.tipoDocumentoAccionante;
    const mayoriaEdadAccionante = props.mayoriaEdadAccionante;
    const numeroDocumentoAccionante = props.numeroDocumentoAccionante;
    const domicilioAccionante = props.domicilioAccionante;
    const direccionAccionante = props.direccionAccionante;
    const correoAccionante = props.correoAccionante;
   
    const nombreAccionado = props.nombreAccionado;
    const tipoDocumentoAccionado = props.tipoDocumentoAccionado;
    const mayoriaEdadAccionado = props.mayoriaEdadAccionado;
    const numeroDocumentoAccionado = props.numeroDocumentoAccionado;
    const domicilioAccionado = props.domicilioAccionado;
    const direccionAccionado = props.direccionAccionado;
    const correoAccionado = props.correoAccionado;
  
    const tipoTutela = props.tipoTutela;
    const tipoDerechoDePeticion = props.tipoDerechoDePeticion;
    const fechaRadicacionDerechoPeticion = props.fechaRadicacionDerechoPeticion;
    const municipioRadicacionDerechoPeticion = props.municipioRadicacionDerechoPeticion;
    const respuestaDerechoDePeticion = props.respuestaDerechoDePeticion;
    const fechaRespuestaDerechoDePeticion = props.fechaRespuestaDerechoDePeticion;
    const fechaSolicitudTiempoDerechoPeticion = props.fechaSolicitudTiempoDerechoPeticion;
    const segundaRespuestaDerechoPeticion = props.segundaRespuestaDerechoPeticion;      


    const accionTutelaObjeto = {
        nombreAccionante : nombreAccionante,
        tipoDocumentoAccionante : tipoDocumentoAccionante,
        mayoriaEdadAccionante : mayoriaEdadAccionante,
        numeroDocumentoAccionante : numeroDocumentoAccionante,
        domicilioAccionante : domicilioAccionante,
        direccionAccionante : direccionAccionante,
        correoAccionante : correoAccionante,

        nombreAccionado : nombreAccionado,
        tipoDocumentoAccionado : tipoDocumentoAccionado,
        mayoriaEdadAccionado : mayoriaEdadAccionado,
        numeroDocumentoAccionado : numeroDocumentoAccionado,
        domicilioAccionado : domicilioAccionado,
        direccionAccionado : direccionAccionado,
        correoAccionado : correoAccionado,
      
        tipoTutela : tipoTutela,
        tipoDerechoDePeticion : tipoDerechoDePeticion,
        fechaRadicacionDerechoPeticion : fechaRadicacionDerechoPeticion,
        municipioRadicacionDerechoPeticion : municipioRadicacionDerechoPeticion,
        respuestaDerechoDePeticion : respuestaDerechoDePeticion,
        fechaRespuestaDerechoDePeticion : fechaRespuestaDerechoDePeticion,
        fechaSolicitudTiempoDerechoPeticion : fechaSolicitudTiempoDerechoPeticion,
        segundaRespuestaDerechoPeticion : segundaRespuestaDerechoPeticion
    
        };

    const accionTutelaObjetoJson = JSON.stringify(accionTutelaObjeto);
    console.log(accionTutelaObjetoJson);

    fetch('http://localhost:3000/descargar', {
      method: 'Post',
      body: accionTutelaObjetoJson
    })
}

export { enviaralBackend };