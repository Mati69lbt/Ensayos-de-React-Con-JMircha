import React, { Component } from "react";
class CicloVida extends Component {
  constructor(props) {
    super(props);
    console.log(`0, el componente se Inicializa, todavia no esta en el DOM`);
    this.state = {
      hora: new Date().toLocaleTimeString(),
    };
    this.temporizador = null;
  }
  componentDidMount() {
    console.log(`1, El Componente ya se encuentra en el DOM`);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(`2, El Estado o las Props del Componente han cambiado`);
    console.log(prevProps);
    console.log(prevState);
  }
  componentWillUnmount() {
    console.log(`3, El Componente ha sido eliminado del DOM`);
  }
  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
  };

  detener = () => {
    clearInterval(this.temporizador);
  };
  render() {
    console.log(`4, el componente se imprime o reimprime por algun cambio`);
    return (
      <>
        <h2>Ciclo de Vida de los Componentes de Clase</h2>
        <h3>{this.state.hora}</h3>
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
      </>
    );
  }
}
export default CicloVida;
