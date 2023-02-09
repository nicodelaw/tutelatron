import React, { useState } from 'react';
import { FormularioDatosIdentificacionAccionante } from './FormularioDatos/FormularioDatosIdentificacionAccionante';
import { FormularioApoderadoAccionante } from './FormularioDatos/FormularioApoderadoAccionante';
import { FormularioDatosIdentificacionAccionado } from './FormularioDatos/FormularioDatosIdentificacionAccionado';
import { FormularioRepresentanteAccionado } from './FormularioDatos/FormularioRepresentanteAccionado';
import { FormularioDatosTutela } from './FormularioDatos/FormularioDatosTutela';
import { FRespuestaDxPeticion } from './FormularioDatos/FRespuestaDxPeticion';
import { FContenidoRDxPeticion } from './FormularioDatos/FContenidoRDxPeticion';
import { FContenidoRDxPeticionTiempoAdicional } from './FormularioDatos/FContenidoRDxPeticionTiempoAdicional';
import { BotonDescarga } from './FormularioDatos/BotonDescarga';
import { Nav } from './FormularioDatos/Nav';
import { Hero } from './FormularioDatos/Hero';
import { Footer } from './FormularioDatos/Footer';

function App(props) {
  
  const [nombreAccionante, setnombreAccionante] = useState('____________' );
  const [tipoDocumentoAccionante, settipoDocumentoAccionante ] = useState('______________' );
  const [mayoriaEdadAccionante, setMayoriaEdadAccionante ] = useState(false);
  const [numeroDocumentoAccionante, setnumeroDocumentoAccionante] = useState('______________');
  const [domicilioAccionante, setdomicilioAccionante] = useState('_____________');
  const [direccionAccionante, setdireccionAccionante]= useState('_____________');
  const [correoAccionante, setcorreoAccionante] = useState('______________');
  const [actuaApoderado, setActuaApoderado] = useState(0);
 
  const [nombreApoderadoAccionante, setnombreApoderadoAccionante] = useState('____________');
  const [tipoDocumentoApoderadoAccionante, settipoDocumentoApoderadoAccionante] = useState('____________');
  const [numeroDocumentoApoderadoAccionante, setnumeroDocumentoApoderadoAccionante] = useState('____________');
  const [direccionApoderadoAccionante, setdireccionApoderadoAccionante] = useState('____________');
  const [correoApoderadoAccionante, setcorreoApoderadoAccionante] = useState('____________');

  const [nombreAccionado, setnombreAccionado] = useState('____________' );
  const [tipoDocumentoAccionado, settipoDocumentoAccionado ] = useState('______________' );
  const [mayoriaEdadAccionado, setMayoriaEdadAccionado ] = useState('_________');
  const [numeroDocumentoAccionado, setnumeroDocumentoAccionado] = useState('______________');
  const [domicilioAccionado, setdomicilioAccionado] = useState('_____________');
  const [direccionAccionado, setdireccionAccionado]= useState('_____________');
  const [correoAccionado, setcorreoAccionado] = useState('______________');
  const [tipoPersonaAccionado, setTipoPersonaAccionado] = useState(0)

  const [nombreRepresentanteAccionado, setnombreRepresentanteAccionado] = useState('____________');
  const [tipoDocumentoRepresentanteAccionado, settipoDocumentoRepresentanteAccionado] = useState('____________');
  const [numeroDocumentoRepresentanteAccionante, setnumeroDocumentoRepresentanteAccionante] = useState('____________');
  const [direccionRepresentanteAccionado, setdireccionRepresentanteAccionado] = useState('____________');
  const [correoRepresentanteAccionado, setcorreoRepresentanteAccionado] = useState('____________');

  const [tipoTutela, setTipoTutela ] = useState('__________');
  const [contenidoRespuestaDerechoPeticionTEXTO, setContenidoRespuestaDerechoPeticionTEXTO] = useState('_____________')
  const [tipoDerechoDePeticion, setTipoDerechoDePeticion] = useState('__________');
  const [tipoDerechoDePeticionInformacion, setTipoDerechoDePeticionInformacion] = useState(false);
  const [tipoDerechoDePeticionDocumentos, setTipoDerechoDePeticionDocumentos] = useState(false);
  const [tipoDerechoDePeticionConsulta, setTipoDerechoDePeticionConsulta] = useState(false);
  const [fechaRadicacionDerechoPeticion, setFechaRadicacionDerechoPeticion] = useState('_____________');
  const [municipioRadicacionDerechoPeticion, setMunicipioRadicacionDerechoPeticion] = useState('__________');
  
  const [respuestaDerechoDePeticion, setRespuestaDerechoDePeticion] = useState(0);
  const [fechaRespuestaDerechoDePeticion, setFechaRespuestaDerechoDePeticion] = useState('___________');
  const [contenidoRespuestaDerechoPeticion, setcontenidoRespuestaDerechoPeticion] = useState(0);
  const [fechaSolicitudTiempoDerechoPeticion, setFechaSolicitudTiempoDerechoPeticion] =useState('__________');
  const [justificacionDerechoDePeticion, setJustificacionDerechoDePeticion]= useState('___________');

  const [segundaRespuestaDerechoPeticion, setSegundaRespuestaDerechoPeticion] = useState('___________'); 
  const [respuestaTiempoAdicional, setRespuestaTiempoAdicional] = useState(0);
  const [fechaRespuestaDerechoDePeticionTAdicional, setFechaRespuestaDerechoDePeticionTAdicional] = useState('_______')
  const [contenidoRespuestaPeticionTAdicional, setContenidoRespuestaPeticionTAdicional] = useState(0)

  return (
    <div className="App">
      <Nav></Nav>
      <Hero></Hero>
      <form class="d-flex align-items-center flex-column bg-light" id='formularioCreacion' onSubmit={(event)=>{event.preventDefault()}}>
       
        <h1>Datos accionante:</h1>
        <FormularioDatosIdentificacionAccionante 
          setnombreAccionante={nombreAccionante => setnombreAccionante(nombreAccionante)}
          settipoDocumentoAccionante={tipoDocumentoAccionante=>settipoDocumentoAccionante(tipoDocumentoAccionante)}
          setMayoriaEdadAccionante={mayoriaEdadAccionante=>setMayoriaEdadAccionante(mayoriaEdadAccionante)}
          setMayoriaEdadAccionado={mayoriaEdadAccionado=>setMayoriaEdadAccionado(mayoriaEdadAccionado)}
          setnumeroDocumentoAccionante={numeroDocumentoAccionante=>setnumeroDocumentoAccionante(numeroDocumentoAccionante)}
          setdomicilioAccionante={domicilioAccionante=>setdomicilioAccionante(domicilioAccionante)}
          setdireccionAccionante={direccionAccionante=>setdireccionAccionante(direccionAccionante)}
          setcorreoAccionante={correoAccionante=>setcorreoAccionante(correoAccionante)}
          setActuaApoderado={actuaApoderado=>setActuaApoderado(actuaApoderado)}
          />

        <FormularioApoderadoAccionante
          actuaApoderado={actuaApoderado}
          setnombreApoderadoAccionante={nombreApoderadoAccionante=>setnombreApoderadoAccionante(nombreApoderadoAccionante)}
          settipoDocumentoApoderadoAccionante={tipoDocumentoApoderadoAccionante=>settipoDocumentoApoderadoAccionante(tipoDocumentoApoderadoAccionante)}
          setnumeroDocumentoApoderadoAccionante={numeroDocumentoApoderadoAccionante=>setnumeroDocumentoApoderadoAccionante(numeroDocumentoApoderadoAccionante)}
          setdireccionApoderadoAccionante={direccionApoderadoAccionante=>setdireccionApoderadoAccionante(direccionApoderadoAccionante)}
          setcorreoApoderadoAccionante={correoApoderadoAccionante=>setcorreoApoderadoAccionante(correoApoderadoAccionante)}
        />

        <h1>Datos accionado:</h1>
        <FormularioDatosIdentificacionAccionado 
          setnombreAccionado={nombreAccionado => setnombreAccionado(nombreAccionado)}
          settipoDocumentoAccionado={tipoDocumentoAccionado=>settipoDocumentoAccionado(tipoDocumentoAccionado)}
          setnumeroDocumentoAccionado={numeroDocumentoAccionado=>setnumeroDocumentoAccionado(numeroDocumentoAccionado)}
          setdomicilioAccionado={domicilioAccionado=>setdomicilioAccionado(domicilioAccionado)}
          setdireccionAccionado={direccionAccionado=>setdireccionAccionado(direccionAccionado)}
          setcorreoAccionado={correoAccionado=>setcorreoAccionado(correoAccionado)}
          setTipoPersonaAccionado={tipoPersonaAccionado=>setTipoPersonaAccionado(tipoPersonaAccionado)}
        />
        <FormularioRepresentanteAccionado 
          tipoPersonaAccionado={tipoPersonaAccionado}
          setnombreRepresentanteAccionado={nombreRepresentanteAccionado=>setnombreRepresentanteAccionado(nombreRepresentanteAccionado)}
          settipoDocumentoRepresentanteAccionado={tipoDocumentoRepresentanteAccionado=>settipoDocumentoRepresentanteAccionado(tipoDocumentoRepresentanteAccionado)}
          setnumeroDocumentoRepresentanteAccionante={numeroDocumentoRepresentanteAccionante=>setnumeroDocumentoRepresentanteAccionante(numeroDocumentoRepresentanteAccionante)}
          setdireccionRepresentanteAccionado={direccionRepresentanteAccionado=>setdireccionRepresentanteAccionado(direccionRepresentanteAccionado)}
          setcorreoRepresentanteAccionado={correoRepresentanteAccionado=>setcorreoRepresentanteAccionado(correoRepresentanteAccionado)}
        />

        <h1>Datos Tutela:</h1>
        <FormularioDatosTutela 
          tipoDerechoDePeticion={tipoDerechoDePeticion}
          contenidoRespuestaDerechoPeticionTEXTO={contenidoRespuestaDerechoPeticionTEXTO}
          tipoDerechoDePeticionInformacion={tipoDerechoDePeticionInformacion}
          tipoDerechoDePeticionDocumentos={tipoDerechoDePeticionDocumentos}
          tipoDerechoDePeticionConsulta={tipoDerechoDePeticionConsulta}
          setTipoDerechoDePeticionInformacion={tipoDerechoDePeticionInformacion=>setTipoDerechoDePeticionInformacion(tipoDerechoDePeticionInformacion)}
          setTipoDerechoDePeticionDocumentos={tipoDerechoDePeticionDocumentos=>setTipoDerechoDePeticionDocumentos(tipoDerechoDePeticionDocumentos)}
          setTipoDerechoDePeticionConsulta={tipoDerechoDePeticionConsulta=>setTipoDerechoDePeticionConsulta(tipoDerechoDePeticionConsulta)}
          setTipoTutela={tipoTutela=>setTipoTutela(tipoTutela)}
          setTipoDerechoDePeticion={tipoDerechoDePeticion=> setTipoDerechoDePeticion(tipoDerechoDePeticion)}
          setContenidoRespuestaDerechoPeticionTEXTO = {contenidoRespuestaDerechoPeticionTEXTO=>setContenidoRespuestaDerechoPeticionTEXTO(contenidoRespuestaDerechoPeticionTEXTO)}
          setFechaRadicacionDerechoPeticion={fechaRadicacionDerechoPeticion=> setFechaRadicacionDerechoPeticion(fechaRadicacionDerechoPeticion)}
          setMunicipioRadicacionDerechoPeticion={municipioRadicacionDerechoPeticion=>setMunicipioRadicacionDerechoPeticion(municipioRadicacionDerechoPeticion)}
          setRespuestaDerechoDePeticion={respuestaDerechoDePeticion=>setRespuestaDerechoDePeticion(respuestaDerechoDePeticion)}
          setFechaRespuestaDerechoDePeticion={fechaRespuestaDerechoDePeticion=>setFechaRespuestaDerechoDePeticion(fechaRespuestaDerechoDePeticion)}
          setFechaSolicitudTiempoDerechoPeticion={fechaSolicitudTiempoDerechoPeticion=>setFechaSolicitudTiempoDerechoPeticion(fechaSolicitudTiempoDerechoPeticion)}
          setSegundaRespuestaDerechoPeticion={segundaRespuestaDerechoPeticion=>setSegundaRespuestaDerechoPeticion(segundaRespuestaDerechoPeticion)}
        />
        
        <FRespuestaDxPeticion 
          respuestaDerechoDePeticion={respuestaDerechoDePeticion}
          setcontenidoRespuestaDerechoPeticion={contenidoRespuestaDerechoPeticion=>setcontenidoRespuestaDerechoPeticion(contenidoRespuestaDerechoPeticion)}
          setFechaRespuestaDerechoDePeticion={fechaRespuestaDerechoDePeticion=>setFechaRespuestaDerechoDePeticion(fechaRespuestaDerechoDePeticion)}
        />

        <FContenidoRDxPeticion 
          contenidoRespuestaDerechoPeticion={contenidoRespuestaDerechoPeticion}
          justificacionDerechoDePeticion={justificacionDerechoDePeticion}
          setJustificacionDerechoDePeticion={justificacionDerechoDePeticion=>setJustificacionDerechoDePeticion(justificacionDerechoDePeticion)}
          setRespuestaTiempoAdicional={respuestaTiempoAdicional=>setRespuestaTiempoAdicional(respuestaTiempoAdicional)}
        />

        <FContenidoRDxPeticionTiempoAdicional 
          respuestaTiempoAdicional={respuestaTiempoAdicional}
          setFechaRespuestaDerechoDePeticionTAdicional={fechaRespuestaDerechoDePeticionTAdicional=>setFechaRespuestaDerechoDePeticionTAdicional(fechaRespuestaDerechoDePeticionTAdicional)}
          setContenidoRespuestaPeticionTAdicional={contenidoRespuestaPeticionTAdicional=>setContenidoRespuestaPeticionTAdicional(contenidoRespuestaPeticionTAdicional)}
        />

        <BotonDescarga 
          nombreAccionante={nombreAccionante}
          tipoDocumentoAccionante={tipoDocumentoAccionante}
          numeroDocumentoAccionante={numeroDocumentoAccionante}
          mayoriaEdadAccionante={mayoriaEdadAccionante}
          domicilioAccionante={domicilioAccionante}
          direccionAccionante={direccionAccionante}
          correoAccionante={correoAccionante}
          actuaApoderado={actuaApoderado}

          nombreApoderadoAccionante={nombreApoderadoAccionante}
          tipoDocumentoApoderadoAccionante={tipoDocumentoApoderadoAccionante}
          numeroDocumentoApoderadoAccionante={numeroDocumentoApoderadoAccionante}
          direccionApoderadoAccionante={direccionApoderadoAccionante}
          correoApoderadoAccionante={correoApoderadoAccionante}

          nombreAccionado={nombreAccionado}
          tipoPersonaAccionado={tipoPersonaAccionado}
          tipoDocumentoAccionado={tipoDocumentoAccionado}
          mayoriaEdadAccionado={mayoriaEdadAccionado}
          numeroDocumentoAccionado={numeroDocumentoAccionado}
          domicilioAccionado={domicilioAccionado}
          direccionAccionado={direccionAccionado}
          correoAccionado={correoAccionado}

          nombreRepresentanteAccionado={nombreRepresentanteAccionado}
          tipoDocumentoRepresentanteAccionado={tipoDocumentoRepresentanteAccionado}
          numeroDocumentoRepresentanteAccionante={numeroDocumentoRepresentanteAccionante}
          direccionRepresentanteAccionado={direccionRepresentanteAccionado}
          correoRepresentanteAccionado={correoRepresentanteAccionado}

          tipoTutela={tipoTutela}
          tipoDerechoDePeticion={tipoDerechoDePeticion}
          tipoDerechoDePeticionInformacion={tipoDerechoDePeticionInformacion}
          tipoDerechoDePeticionDocumentos={tipoDerechoDePeticionDocumentos}
          tipoDerechoDePeticionConsulta={tipoDerechoDePeticionConsulta}
          contenidoRespuestaDerechoPeticionTEXTO={contenidoRespuestaDerechoPeticionTEXTO}
          justificacionDerechoDePeticion={justificacionDerechoDePeticion}
          fechaRadicacionDerechoPeticion={fechaRadicacionDerechoPeticion}
          municipioRadicacionDerechoPeticion={municipioRadicacionDerechoPeticion}
          respuestaDerechoDePeticion={respuestaDerechoDePeticion}
          fechaRespuestaDerechoDePeticion={fechaRespuestaDerechoDePeticion}
          fechaSolicitudTiempoDerechoPeticion={fechaSolicitudTiempoDerechoPeticion}
          contenidoRespuestaDerechoPeticion={contenidoRespuestaDerechoPeticion}
          segundaRespuestaDerechoPeticion={segundaRespuestaDerechoPeticion}
          respuestaTiempoAdicional={respuestaTiempoAdicional}
          fechaRespuestaDerechoDePeticionTAdicional={fechaRespuestaDerechoDePeticionTAdicional}
          contenidoRespuestaPeticionTAdicional={contenidoRespuestaPeticionTAdicional}
        />
      </form>
      <Footer></Footer>
    </div>
  );
}

export default App;
