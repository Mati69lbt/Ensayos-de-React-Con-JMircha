import React, { Component } from "react";
class Componente extends Component {
  state = {};
  render() {
    return <h2>Hola! soy un Componente de clase</h2>;
  }
}
class Com1 extends Component {
  state = {};
  render() {
    return <h2>{this.props.msg}</h2>;
  }
}
function Com2(props) {
  return <h2>{props.msg}</h2>;
}
const Com3 = (props) => <h2>{props.msg}</h2>;
export { Componente, Com1, Com2, Com3 };
