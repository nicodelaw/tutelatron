import React from "react";

function FContenidoRDxPeticion(props){

    if(props.contenidoRespuestaDerechoPeticion == 0){
        return(
            <h1>0</h1>
        )
    }
    else if(props.contenidoRespuestaDerechoPeticion == 1){
        return(
            <h1>1</h1>
        )
    }
    else if(props.contenidoRespuestaDerechoPeticion == 2){
        return(
            <h1>2</h1>
        )
    }
    else if(props.contenidoRespuestaDerechoPeticion == 3){
        return(
            <h1>3</h1>
        )
    }
    else if(props.contenidoRespuestaDerechoPeticion == 4){
        return(
            <h1>4</h1>
        )
    }
    else {
        return(
            <h1>default</h1>
        )
    }
    
}

export { FContenidoRDxPeticion };