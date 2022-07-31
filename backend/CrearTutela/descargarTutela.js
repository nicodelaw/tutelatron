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
        nombredemandado: `${props.nombreAccionado}`,
        cedulademandante: `${props.numeroDocumentoAccionante}`,
        cedulademandado: `${props.numeroDocumentoAccionado}`,
        domiciliodemandante: `${props.domicilioAccionante}`,
        domiciliodemandado: `${props.domicilioAccionado}`,
        fecharadicacion: `${props.fechaRadicacionDerechoPeticion || "ayer"}`,
        representantedemandado: true,
        representantedemandado: "Juan on Juan",
        domicilioradicacion: `${props.municipioRadicacionDerechoPeticion}`,
        fecharespuesta: true,
        tiempoextra: false,
        fechasegundarespuesta: true,
    }) 

    const buf = doc.getZip().generate({
        type: "nodebuffer",
        compression: "DEFLATE",
    });
    
    fs.writeFileSync(path.resolve(__dirname, "output.docx"), buf);
    };

module.exports =  { descargarTutela };