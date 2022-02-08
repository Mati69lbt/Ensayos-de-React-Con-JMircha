import logo from "./logo.svg";
import "./App.css";
import { Componente, Com1, Com2, Com3 } from "./components/Componente";
import { Propiedades, Prop1, Prop2 } from "./components/Propiedades";
import { Estado } from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import  { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import Padre from "./components/ComunicacionComponentes";
import CicloVida from "./components/CIcloVida";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks-useEffect";
import RelojHooks from "./components/Reloj-Hooks-useEffect";
import AjaxHooks from "./components/ajax-Hooks";
import HooksPersonalizados from "./components/Hooks-personalizados-customs";
import Referencias from "./components/Refereencias";
import Formularios from "./components/Formularios";
import FormularioSimplificado from "./components/FormularioSimplificado";
import Estilos from "./components/Estilos";

function App() {
  let nombre = "Matias";
  let auth = true;
  let estaciones = ["verano", "invierno", "otoño", "primavera"];
  return (
    <div className="App">
      <h1>Hola Mundo!!!</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" />
        <h2>{nombre}</h2>
        <p>{auth ? "el usuario esta logueado" : "El usuario no esta"}</p>
        <p>{73 * 89}</p>
        <ul>
          {estaciones.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section className="Comp">
        <Componente />
        <Com1 msg="Soy un Componente pasado por props" />
        <Com2 msg="Soy el 1er Componente Funcional Expresada pasado por props" />
        <Com3 msg="Soy un Componente Funcional Declarado pasado por Props" />
      </section>
      <hr />
      <section className="Prop">
        <Propiedades />
        <Prop1 />
        <Prop2 className="a"
          cadena="esto es un string"
          numero={69}
          booleano={true}
          arreglo={[1, 2, 3]}
          obj={{ name: "matias", edad: "21 años" }}
          funcion={(num)=> num*num}
          elementoReact={<i>Esto es un elemnto React</i>}
          componenteReact={<Com1 msg="soy un componente pasado como props + abajo"/>}
        />
      </section>
      <hr/>
      <section className="estado">
        <Estado/>
      </section>
      <hr/>
      <section className="rencon">
        <RenderizadoCondicional/>
      </section>
      <hr/>
      <section className="renel">
        <RenderizadoElementos/>
      </section>
      <hr/>
      <section className="eventos">
        <EventosES6/>
        <br/>
        <EventosES7/>
        <br/>
        <MasSobreEventos/>
      </section>
      <hr/>
      <section className="comu">
        <Padre/>
      </section>
      <hr/>
      <section className="ciclo">
        <CicloVida/>
      </section>
      <hr/>
      <section className="ajaxapis">      
        <AjaxApis/>      
      </section>
      <hr/>
      <section className="usestate">
        <ContadorHooks/>
      </section>
      <hr/>
      <section className="useeffect">
        <ScrollHooks/>
      </section>
      <hr/>
      <section className="relojhooks">
        <RelojHooks/>
      </section>
      <hr/>
      <section className="ajaxhooks">
        <AjaxHooks/>
      </section>
      <hr/>
      <section className="hp">
        <HooksPersonalizados/>
      </section>
      <hr/>
      <section className="refe">
        <Referencias/>
      </section>
      <hr/>
      <section className="form">
        <Formularios/>
      </section>
      <hr/>
      <section className="forsim">
      <FormularioSimplificado/>
      </section>
      <hr/>
      <section>
        <Estilos/>
      </section>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
