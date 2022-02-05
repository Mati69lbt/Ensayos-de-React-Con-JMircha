import React from "react";

function Propiedades(props) {
  return (
    <div>
      <h2>Propiedades</h2>
    </div>
  );
}
function Prop1(props) {
  return (
    <div>
      <h2>{props.porDefecto}</h2>
    </div>
  ); 
}
Prop1.defaultProps = {
  porDefecto: "lasProps",
};
function Prop2(props){
    return (
        <div>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano? "true": "false"}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{props.obj.name + "-" + props.obj.edad}</li>
                <li>{props.arreglo.map(props.funcion).join(", ")}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
                
            </ul>
        </div>
    )
}
export { Propiedades, Prop1, Prop2 };
