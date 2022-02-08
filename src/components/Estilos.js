import React from "react";
import "./Estilos.css";
import "./Estilos.scss";
import moduleStyle from "./Estilos.module.css"


export default function Estilos() {
  let myStyle = {
    borderRadius: "5rem",
    margin: "2rem auto",
    maxWidth: "50%",
  };
  return (
    <section className="Estilos">
      <h2>Estilos CSS en React</h2>
      <h3 className="bg-react"> Estilos en hoja CSS Externa</h3>
      <h3
        className="bg-react"
        style={{ borderRadius: "25rem", margin: "1rem" }}
      >
        Estilo en Linea(atributo Style)
      </h3>
      <h3 className="bg-react" style={myStyle}>
        Estilos en Linea
      </h3>
      <h3 className="bg-react">
        {" "}
        Agregando Normalize con (no intereso)<br />
        <code>@import-normailize</code>
      </h3>
      <h3 className={moduleStyle.error}>Estilos con Modulos</h3>
      <h3 className={moduleStyle.success}>Estilos con Modulos con exito!</h3>
      <h3 className="bg-sass">Estilos con SASS!</h3>
    </section>
  );
}
