import React from 'react';
import "./Hero.css"

const Hero = () => {
    return(
        <div>
            <section class="mx-auto py-6 py-xxl-10 hcf-bp-center hcf-bs-cover ">
                    <div class="mx-auto row justify-content-center align-self-center">
                    <div class="mx-auto col-12 col-md-11 col-lg-9 col-xl-7 col-xxl-6 text-center text-black">
                        <br />
                        <h1 id="heroTitulo" class="display-3 mb-3">tutela<strong>tron</strong></h1>
                        <br />
                        <p class="lead mb-5">Esta es una aplicación, que ayuda a llenar formatos de acciones de tutela por violación al derecho fundamental de petición.</p>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <a href="#Descripcion"><button type="button" id="botonEmpezar" class="btn btn-outline-success">Empezar</button></a>
                        </div>
                    </div>
                    </div>
                </section>          
            </div>
    )
}

export { Hero }