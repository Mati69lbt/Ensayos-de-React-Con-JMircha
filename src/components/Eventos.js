import React, { Component } from "react";
export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }
  sumar(e) {
    console.log("sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  restar() {
    console.log("restar");
    this.setState({
      contador: this.state.contador - 1,
    });
  }
  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clases ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

export class EventosES7 extends Component {
  state = {
    contador: 0,
  };
  sumar = (e) => {
    console.log("sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  };
  restar = (e) => {
    console.log("restar");
    this.setState({
      contador: this.state.contador - 1,
    });
  };
  render() {
    return (
      <div>
        <h2>Eventos en Componentes de ClasesES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

function Boton(props) {
  return <button onClick={props.myOnClick}>Boton hecho Componente</button>;
}
const BotonDos = (props) => (
  <button onClick={props.myOnClickDos}>
    Boton Arrow Function hecho Componente
  </button>)
export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log("e");
    console.log(e);
    console.log("e.target");
    console.log(e.target);
    console.log("e.nativeEvent");
    console.log(e.nativeEvent);
    console.log("e.nativeEvent.target");
    console.log(e.nativeEvent.target);
    console.log(`Mensaje: ${mensaje}`);
  };
  render() {
    return (
      <div>
        <h2>Mas Sobre Eventos</h2>
        <p>Eventos Nativos y Sinteticos: a un onclick, le pedimos informacion con el console.log sobre el e.target y sobre el e.native.target, ademas el pasamos un mensaje</p>
        <p>Despues creamos un evento personalizado con un boton de un componente</p>
        <button
          onClick={(e) =>
            this.handleClick(e, "Hola, soy un msg pasado desde un evento!!")
          }
        >
          Saludar
        </button>
        <br />
        <Boton
          myOnClick={(e) =>
            this.handleClick(e, "Yo soy un Boton personalizado!!! ")
          }
        />
        <BotonDos
          myOnClickDos={(e) =>
            this.handleClick(
              e,
              "Yo soy un Boton personalizado con arrow Funcition!!! "
            )
          }
        />
      </div>
    );
  }
}
