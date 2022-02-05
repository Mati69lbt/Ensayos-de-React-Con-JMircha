// import React, { Component } from "react";

// class Estado extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       contador: 0,
//       c2: 0,
//       c3: 0,
//       c4: 0,
//       c5: 0,
//       cdiez: 0,
//     };
//     setInterval(() => {
//       this.setState({
//         cdiez:
//           this.state.contador +
//           this.state.c2 +
//           this.state.c3 +
//           this.state.c4 +
//           this.state.c5,
//       });
//     }, 10000);
//     setInterval(() => {
//       this.setState({
//         contador: this.state.contador + 1,
//       });
//     }, 300);
//     setInterval(() => {
//       this.setState({
//         c2: this.state.contador * 10,
//       });
//     }, 1000);
//     setInterval(() => {
//       this.setState({
//         c3: this.state.c2 * 10,
//       });
//     }, 1000);
//     setInterval(() => {
//       this.setState({
//         c4: this.state.c3 * 10,
//       });
//     }, 1000);
//     setInterval(() => {
//       this.setState({
//         c5: this.state.c4 * 10,
//       });
//     }, 1000);
//   }
//   render() {
//     return (
//       <div>
//         <h2> El State</h2>
//         <h5>{this.state.cdiez}</h5>
//         <p>c {this.state.contador}</p>
//         <p>c2 {this.state.c2}</p>
//         <p>c3 {this.state.c3}</p>
//         <p>c4 {this.state.c4}</p>
//         <p>c5 {this.state.c5}</p>
//         <p></p>
//         <EstadoAHijo
//           contadorHijo={
//             this.state.contador +
//             this.state.c3 +
//             this.state.c2 +
//             this.state.c4 +
//             this.state.c5
//           }
//         />
//       </div>
//     );
//   }
// }
// function EstadoAHijo(props) {
//   return (
//     <div>
//       <h3>{props.contadorHijo}</h3>
//     </div>
//   );
// }
// export { Estado };