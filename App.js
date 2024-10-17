import "./App.css";

import links from "./link/link";

import { Notas } from "./inicio/notaestudent/notas";

import { PerfilEstudiante } from "./mis-datos/mis-datos";

import Header from "./header/header";

import useLocalStorage from "./persistencia/local";
import BotonOpciones from "./opti-boto/option";
// import { Formulario } from "./formulario/formulario";
function App() {
  
  const [nombre, setNombre] = useLocalStorage("nombre", "");

  const estudiante = {
    nombre: "ferney perez",
    edad: 21,
    carrera: "Ingeniería de Sistemas",
  };

  return (
    <div className="App">
      <header className="header">
        {/* <PerfilEstudiante /> */}

        <BotonOpciones />

        <Header />
      </header>

      {/* <Navbar/> */}

      {/* <Formulario /> */}

      <br />

      {/* notas */}

      <Notas />

      {/* <h1>Hola, {nombre ? estudiante.nombre : ""}</h1>
      <input
        type="text"
        value={estudiante.nombre}
        onChange={e => setNombre(e.target.value)}
        placeholder="Introduce tu nombre"
      /> */}
    </div>
  );
}

export default App;
