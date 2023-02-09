import React from 'react';
import cabeza from './CABEZA HALVOR.png';
import "./Hero.css"


const Hero = () => {
    return(
        <div>
            <section class="px-5 py-6 py-xxl-10 hcf-bp-center hcf-bs-cover hcf-overlay hcf-transform">
                    <div class="row justify-content-center align-self-center">
                    <div class="col-12 col-md-11 col-lg-9 col-xl-7 col-xxl-6 text-center text-black">
                        <h1 class="display-3 fw-bold mb-3">tutelatron</h1>
                        <p class="lead mb-5">Esta es una aplicación, que ayuda a llenar formatos de acciones de tutela por violación al derecho fundamental de petición.</p>
                        <img src={cabeza} id="cabeza"></img>
                        <div class="card-body">
                            <h4 class="card-title">Esto se hace en tres pasos:</h4>
                            <p class="lead mb-3">1. Contestar las preguntas del formulario. Estas pueden variar dependiendo las respuestas dadas.</p>
                            <p class="lead mb-3">2. Al finalizar, dar click en el botón "Crear Tutela" y esperar unos segundos.</p>
                            <p class="lead mb-3">3. Dar click en el botón "Descargar" que aparecerá una vez haya cargado.</p>
                        </div>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" class="btn btn-light btn-lg px-4 gap-3">Empezar</button>
                        </div>
                    </div>
                    </div>
                </section>          
            </div>
    )
}

export { Hero }