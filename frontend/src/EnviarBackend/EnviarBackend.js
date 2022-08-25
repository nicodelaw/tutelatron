
const enviaralBackend = (props) =>{

    const nombreAccionante = props.nombreAccionante;
    const tipoDocumentoAccionante = props.tipoDocumentoAccionante;
    const mayoriaEdadAccionante = props.mayoriaEdadAccionante;
    const numeroDocumentoAccionante = props.numeroDocumentoAccionante;
    const domicilioAccionante = props.domicilioAccionante;
    const direccionAccionante = props.direccionAccionante;
    const correoAccionante = props.correoAccionante;
    const actuaApoderado = props.actuaApoderado;

    const nombreApoderadoAccionante= props.nombreApoderadoAccionante;
    const tipoDocumentoApoderadoAccionante= props.tipoDocumentoApoderadoAccionante;
    const numeroDocumentoApoderadoAccionante= props.numeroDocumentoApoderadoAccionante;
    const direccionApoderadoAccionante= props.direccionApoderadoAccionante;
    const correoApoderadoAccionante= props.correoApoderadoAccionante;

    const nombreAccionado = props.nombreAccionado;
    const tipoPersonaAccionado = props.tipoPersonaAccionado;
    const tipoDocumentoAccionado = props.tipoDocumentoAccionado;
    const mayoriaEdadAccionado = props.mayoriaEdadAccionado;
    const numeroDocumentoAccionado = props.numeroDocumentoAccionado;
    const domicilioAccionado = props.domicilioAccionado;
    const direccionAccionado = props.direccionAccionado;
    const correoAccionado = props.correoAccionado;

    const nombreRepresentanteAccionado= props.nombreRepresentanteAccionado;
    const tipoDocumentoRepresentanteAccionado= props.tipoDocumentoRepresentanteAccionado;
    const numeroDocumentoRepresentanteAccionante= props.numeroDocumentoRepresentanteAccionante;
    const direccionRepresentanteAccionado= props.direccionRepresentanteAccionado;
    const correoRepresentanteAccionado= props.correoRepresentanteAccionado;
  
    const tipoTutela = props.tipoTutela;
    const tipoDerechoDePeticion = props.tipoDerechoDePeticion;
    const fechaRadicacionDerechoPeticion = props.fechaRadicacionDerechoPeticion;
    const municipioRadicacionDerechoPeticion = props.municipioRadicacionDerechoPeticion;
    const respuestaDerechoDePeticion = props.respuestaDerechoDePeticion;
    const fechaRespuestaDerechoDePeticion = props.fechaRespuestaDerechoDePeticion;
    const fechaSolicitudTiempoDerechoPeticion = props.fechaSolicitudTiempoDerechoPeticion;
    const segundaRespuestaDerechoPeticion = props.segundaRespuestaDerechoPeticion;      
    const contenidoRespuestaDerechoPeticion = props.contenidoRespuestaDerechoPeticion;
    const respuestaTiempoAdicional= props.respuestaTiempoAdicional;
    const fechaRespuestaDerechoDePeticionTAdicional = props.fechaRespuestaDerechoDePeticionTAdicional;
    const contenidoRespuestaPeticionTAdicional= props.contenidoRespuestaPeticionTAdicional;

    const accionTutelaObjeto = {
        nombreAccionante : nombreAccionante,
        tipoDocumentoAccionante : tipoDocumentoAccionante,
        mayoriaEdadAccionante : mayoriaEdadAccionante,
        numeroDocumentoAccionante : numeroDocumentoAccionante,
        domicilioAccionante : domicilioAccionante,
        direccionAccionante : direccionAccionante,
        correoAccionante : correoAccionante,
        actuaApoderado: actuaApoderado,

        nombreApoderadoAccionante : nombreApoderadoAccionante,
        tipoDocumentoApoderadoAccionante : tipoDocumentoApoderadoAccionante,
        numeroDocumentoApoderadoAccionante : numeroDocumentoApoderadoAccionante,
        direccionApoderadoAccionante : direccionApoderadoAccionante,
        correoApoderadoAccionante: correoApoderadoAccionante,

        nombreAccionado : nombreAccionado,
        tipoPersonaAccionado: tipoPersonaAccionado,
        tipoDocumentoAccionado : tipoDocumentoAccionado,
        mayoriaEdadAccionado : mayoriaEdadAccionado,
        numeroDocumentoAccionado : numeroDocumentoAccionado,
        domicilioAccionado : domicilioAccionado,
        direccionAccionado : direccionAccionado,
        correoAccionado : correoAccionado,

        nombreRepresentanteAccionado : nombreRepresentanteAccionado,
        tipoDocumentoRepresentanteAccionado : tipoDocumentoRepresentanteAccionado,
        numeroDocumentoRepresentanteAccionante : numeroDocumentoRepresentanteAccionante,
        direccionRepresentanteAccionado : direccionRepresentanteAccionado,
        correoRepresentanteAccionado : correoRepresentanteAccionado,
      
        tipoTutela : tipoTutela, 
        tipoDerechoDePeticion : tipoDerechoDePeticion,
        fechaRadicacionDerechoPeticion : fechaRadicacionDerechoPeticion,
        municipioRadicacionDerechoPeticion : municipioRadicacionDerechoPeticion,
        respuestaDerechoDePeticion : respuestaDerechoDePeticion,
        fechaRespuestaDerechoDePeticion : fechaRespuestaDerechoDePeticion,
        fechaSolicitudTiempoDerechoPeticion : fechaSolicitudTiempoDerechoPeticion,
        segundaRespuestaDerechoPeticion : segundaRespuestaDerechoPeticion,
        contenidoRespuestaDerechoPeticion: contenidoRespuestaDerechoPeticion,
        respuestaTiempoAdicional: respuestaTiempoAdicional,
        fechaRespuestaDerechoDePeticionTAdicional: fechaRespuestaDerechoDePeticionTAdicional,
        contenidoRespuestaPeticionTAdicional: contenidoRespuestaPeticionTAdicional
        };

    const accionTutelaObjetoJson = JSON.stringify(accionTutelaObjeto);
    console.log(accionTutelaObjetoJson);

    fetch('http://localhost:3000/descargar', {
      method: 'Post',
      body: accionTutelaObjetoJson
    })
}

export { enviaralBackend };