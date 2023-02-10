import React from "react";
import cabeza from './CABEZA HALVOR.png';

const Descripcion = () =>{
    return(
    <div id="Descripcion" class="d-flex flex-row">
        <div class="w-25">
            <br />
            <img class="w-75" src={cabeza} id="cabeza"></img>
        </div>
        <div class="card-body w-100">
            <br />
            <h4 class="card-title">La aplicación funciona en tres pasos:</h4>
            <p class="lead mb-3">1. Contestar las preguntas del formulario. Estas pueden variar dependiendo las respuestas dadas.</p>
            <p class="lead mb-3">2. Al finalizar, dar click en el botón "Crear Tutela" y esperar unos segundos.</p>
            <p class="lead mb-3">3. Dar click en el botón "Descargar" que aparecerá una vez haya cargado.</p>
        </div>
    </div>
    )
}

export { Descripcion };