import React, { useState } from 'react';
import { CreateTutela } from './CrearTutela/createTutela';
import { FormularioDatosIdentificacionAccionante } from './FormularioDatos/FormularioDatosIdentificacionAccionante';
import { FormularioDatosIdentificacionAccionado } from './FormularioDatos/FormularioDatosIdentificacionAccionado';
import { FormularioDatosTutela } from './FormularioDatos/FormularioDatosTutela';
import { enviaralBackend } from './EnviarBackend/EnviarBackend';
import './App.css';

function App(props) {
  
  const [nombreAccionante, setnombreAccionante] = useState('____________' );
  const [tipoDocumentoAccionante, settipoDocumentoAccionante ] = useState('______________' );
  const [mayoriaEdadAccionante, setMayoriaEdadAccionante ] = useState(false);
  const [numeroDocumentoAccionante, setnumeroDocumentoAccionante] = useState('______________');
  const [domicilioAccionante, setdomicilioAccionante] = useState('_____________');
  const [direccionAccionante, setdireccionAccionante]= useState('_____________');
  const [correoAccionante, setcorreoAccionante] = useState('______________');
 
  const [nombreAccionado, setnombreAccionado] = useState('____________' );
  const [tipoDocumentoAccionado, settipoDocumentoAccionado ] = useState('______________' );
  const [mayoriaEdadAccionado, setMayoriaEdadAccionado ] = useState('_________');
  const [numeroDocumentoAccionado, setnumeroDocumentoAccionado] = useState('______________');
  const [domicilioAccionado, setdomicilioAccionado] = useState('_____________');
  const [direccionAccionado, setdireccionAccionado]= useState('_____________');
  const [correoAccionado, setcorreoAccionado] = useState('______________');

  const [tipoTutela, setTipoTutela ] = useState('__________');
  const [tipoDerechoDePeticion, setTipoDerechoDePeticion] = useState('______');
  const [fechaRadicacionDerechoPeticion, setFechaRadicacionDerechoPeticion] = useState('_____________');
  const [municipioRadicacionDerechoPeticion, setMunicipioRadicacionDerechoPeticion] = useState('__________');
  const [respuestaDerechoDePeticion, setRespuestaDerechoDePeticion] = useState(false);
  const [fechaRespuestaDerechoDePeticion, setFechaRespuestaDerechoDePeticion] = useState('___________');
  const [fechaSolicitudTiempoDerechoPeticion, setFechaSolicitudTiempoDerechoPeticion] =useState('__________');
  const [segundaRespuestaDerechoPeticion, setSegundaRespuestaDerechoPeticion] = useState('___________');

  
  return (
    <div className="App">
      <form id='formularioCreacion' onSubmit={(event)=>{event.preventDefault()}}>
        <CreateTutela 
          nombreAccionante={nombreAccionante}
          tipoDocumentoAccionante={tipoDocumentoAccionante}
          numeroDocumentoAccionante={numeroDocumentoAccionante}
          mayoriaEdadAccionante={mayoriaEdadAccionante}
          domicilioAccionante={domicilioAccionante}
          direccionAccionante={direccionAccionante}
          correoAccionante={correoAccionante}

          nombreAccionado={nombreAccionado}
          tipoDocumentoAccionado={tipoDocumentoAccionado}
          mayoriaEdadAccionado={mayoriaEdadAccionado}
          numeroDocumentoAccionado={numeroDocumentoAccionado}
          domicilioAccionado={domicilioAccionado}
          direccionAccionado={direccionAccionado}
          correoAccionado={correoAccionado}

          tipoTutela={tipoTutela}
          tipoDerechoDePeticion={tipoDerechoDePeticion}
          fechaRadicacionDerechoPeticion={fechaRadicacionDerechoPeticion}
          municipioRadicacionDerechoPeticion={municipioRadicacionDerechoPeticion}
          respuestaDerechoDePeticion={respuestaDerechoDePeticion}
          fechaRespuestaDerechoDePeticion={fechaRespuestaDerechoDePeticion}
          fechaSolicitudTiempoDerechoPeticion={fechaSolicitudTiempoDerechoPeticion}
          segundaRespuestaDerechoPeticion={segundaRespuestaDerechoPeticion}
        />
        <p>Datos accionante:</p>
        <FormularioDatosIdentificacionAccionante 
          setnombreAccionante={nombreAccionante => setnombreAccionante(nombreAccionante)}
          settipoDocumentoAccionante={tipoDocumentoAccionante=>settipoDocumentoAccionante(tipoDocumentoAccionante)}
          setMayoriaEdadAccionante={mayoriaEdadAccionante=>setMayoriaEdadAccionante(mayoriaEdadAccionante)}
          setMayoriaEdadAccionado={mayoriaEdadAccionado=>setMayoriaEdadAccionado(mayoriaEdadAccionado)}
          setnumeroDocumentoAccionante={numeroDocumentoAccionante=>setnumeroDocumentoAccionante(numeroDocumentoAccionante)}
          setdomicilioAccionante={domicilioAccionante=>setdomicilioAccionante(domicilioAccionante)}
          setdireccionAccionante={direccionAccionante=>setdireccionAccionante(direccionAccionante)}
          setcorreoAccionante={correoAccionante=>setcorreoAccionante(correoAccionante)}
        />
        <p>Datos accionado:</p>
        <FormularioDatosIdentificacionAccionado 
          setnombreAccionado={nombreAccionado => setnombreAccionado(nombreAccionado)}
          settipoDocumentoAccionado={tipoDocumentoAccionado=>settipoDocumentoAccionado(tipoDocumentoAccionado)}
          setnumeroDocumentoAccionado={numeroDocumentoAccionado=>setnumeroDocumentoAccionado(numeroDocumentoAccionado)}
          setdomicilioAccionado={domicilioAccionado=>setdomicilioAccionado(domicilioAccionado)}
          setdireccionAccionado={direccionAccionado=>setdireccionAccionado(direccionAccionado)}
          setcorreoAccionado={correoAccionado=>setcorreoAccionado(correoAccionado)}
        />
        <p>Datos Tutela:</p>
        <FormularioDatosTutela 
          setTipoTutela={tipoTutela=>setTipoTutela(tipoTutela)}
          setTipoDerechoDePeticion={tipoDerechoDePeticion=> setTipoDerechoDePeticion(tipoDerechoDePeticion)}
          setFechaRadicacionDerechoPeticion={fechaRadicacionDerechoPeticion=> setFechaRadicacionDerechoPeticion(fechaRadicacionDerechoPeticion)}
          setMunicipioRadicacionDerechoPeticion={municipioRadicacionDerechoPeticion=>setMunicipioRadicacionDerechoPeticion(municipioRadicacionDerechoPeticion)}
          setRespuestaDerechoDePeticion={respuestaDerechoDePeticion=>setRespuestaDerechoDePeticion(respuestaDerechoDePeticion)}
          setFechaRespuestaDerechoDePeticion={fechaRespuestaDerechoDePeticion=>setFechaRespuestaDerechoDePeticion(fechaRespuestaDerechoDePeticion)}
          setFechaSolicitudTiempoDerechoPeticion={fechaSolicitudTiempoDerechoPeticion=>setFechaSolicitudTiempoDerechoPeticion(fechaSolicitudTiempoDerechoPeticion)}
          setSegundaRespuestaDerechoPeticion={segundaRespuestaDerechoPeticion=>setSegundaRespuestaDerechoPeticion(segundaRespuestaDerechoPeticion)}
        />
        <p>Descargar</p>
        <button action="/add" method="post" type="submit"
            onClick={()=>{enviaralBackend(props)}}
            className="botonDescarga"
        > 
            Descargar 
        </button> 
      </form>
    </div>
  );
}

export default App;
