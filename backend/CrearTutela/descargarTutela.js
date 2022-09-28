const fs = require("fs");
const path = require("path");
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");

const descargarTutela = (props) => {
        
    const content = fs.readFileSync(
        path.resolve(__dirname, "tutelapruebadocxtemplater.docx"),
        "binary"
    );

    const zip = new PizZip(content);

    const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
    });

    doc.render({
        nombredemandante: `${props.nombreAccionante}`,
        tipoDocumentoAccionante: `${props.tipoDocumentoAccionante}`,
        cedulademandante: `${props.numeroDocumentoAccionante}`,
        mayoriaEdadAccionante : `${props.mayoriaEdadAccionante}`,
        domiciliodemandante: `${props.domicilioAccionante}`,
        direccionAccionante: `${props.direccionAccionante}`,
        correoAccionante: `${props.correoAccionante}`,
        actuaApoderado: `${props.actuaApoderado}`,

        nombreApoderadoAccionante : `${props.nombreApoderadoAccionante}`,
        tipoDocumentoApoderadoAccionante : `${props.tipoDocumentoApoderadoAccionante}`,
        numeroDocumentoApoderadoAccionante : `${props.numeroDocumentoApoderadoAccionante}`,
        direccionApoderadoAccionante : `${props.direccionApoderadoAccionante}`,
        correoApoderadoAccionante: `${props.correoApoderadoAccionante}`,

        nombredemandado: `${props.nombreAccionado}`,
        tipoPersonaAccionado: `${props.tipoPersonaAccionado}`,
        cedulademandado: `${props.numeroDocumentoAccionado}`,
        mayoriaEdadAccionado : `${props.mayoriaEdadAccionado}`,
        domiciliodemandado: `${props.domicilioAccionado}`,
        direccionAccionado: `${props.direccionAccionado}`,
        correoAccionado: `${props.correoAccionado}`,

        nombreRepresentanteAccionado : `${props.nombreRepresentanteAccionado}`,
        tipoDocumentoRepresentanteAccionado : `${props.tipoDocumentoRepresentanteAccionado}`,
        numeroDocumentoRepresentanteAccionante : `${props.numeroDocumentoRepresentanteAccionante}`,
        direccionRepresentanteAccionado : `${props.direccionRepresentanteAccionado}`,
        correoRepresentanteAccionado : `${props.correoRepresentanteAccionado}`,

        tipoTutela: `${props.tipoTutela}`,
        tipoDerechoDePeticion:`${props.tipoDerechoDePeticion}`,
        tipoDerechoDePeticionInformacion : `${props.tipoDerechoDePeticionInformacion}`,
        tipoDerechoDePeticionDocumentos : `${props.tipoDerechoDePeticionDocumentos}`,
        tipoDerechoDePeticionConsulta : `${props.tipoDerechoDePeticionConsulta}`, 
        justificacionDerechoDePeticion : `${props.justificacionDerechoDePeticion}`,
        contenidoRespuestaDerechoPeticionTEXTO: `${props.contenidoRespuestaDerechoPeticionTEXTO}`,
        fechaRadicacionDerechoPeticion: `${props.fechaRadicacionDerechoPeticion}`,
        municipioRadicacionDerechoPeticion: `${props.municipioRadicacionDerechoPeticion}`,
        respuestaDerechoDePeticion:`${props.respuestaDerechoDePeticion}`,
        fechaRespuestaDerechoDePeticion: `${props.fechaRespuestaDerechoDePeticion}`,
        fechaSolicitudTiempoDerechoPeticion: `${props.fechaSolicitudTiempoDerechoPeticion}`,
        segundaRespuestaDerechoPeticion: `${props.segundaRespuestaDerechoPeticion}`,
        respuestaTiempoAdicional: `${props.respuestaTiempoAdicional}`,
        fechaRespuestaDerechoDePeticionTAdicional: `${props.fechaRespuestaDerechoDePeticionTAdicional}`,
        contenidoRespuestaPeticionTAdicional: `${props.contenidoRespuestaPeticionTAdicional}`, 
    }) 

    const buf = doc.getZip().generate({
        type: "nodebuffer",
        compression: "DEFLATE",
    });
    
    fs.writeFileSync(path.resolve(__dirname, 'output.docx'), buf);
    };

module.exports =  { descargarTutela };