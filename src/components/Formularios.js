import React, { useState } from "react";

export default function Formularios() {
  const [nombre, setNombre] = useState("");
  const [sabror, setSabror] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [terminos, setTerminos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El Formulario se ha enviado con exito!");
  };

  return (
    <>
      <h2>Formaularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Escribe tu nombre"
          //
        />
        <p>Elige tu Sabor Favorito</p>
        <input
          type="radio"
          id="Chocolate"
          name="sabor"
          value="Chocolate"
          onChange={(e) => setSabror(e.target.value)}
        />
        <label htmlFor="Chocolate">Chocolate</label>
        <input
          type="radio"
          id="Frutilla"
          name="sabor"
          value="Frutilla"
          onChange={(e) => setSabror(e.target.value)}
        />
        <label htmlFor="Frutilla">Frutilla</label>
        <input
          type="radio"
          id="Limon"
          name="sabor"
          value="Limon"
          onChange={(e) => setSabror(e.target.value)}
        />
        <label htmlFor="Limon">Limon</label>
        <input
          type="radio"
          id="Marroc"
          name="sabor"
          value="Marroc"
          onChange={(e) => setSabror(e.target.value)}
        />
        <label htmlFor="Marroc">Marroc</label>
        <input
          type="radio"
          id="Granizado"
          name="sabor"
          value="Granizado"
          onChange={(e) => setSabror(e.target.value)}
          defaultChecked
        />
        <label htmlFor="Granizado">Granizado</label>
        <input
          type="radio"
          id="Tramontana"
          name="sabor"
          value="Tramontana"
          onChange={(e) => setSabror(e.target.value)}
        />
        <label htmlFor="Tramontana">Tramontana</label>
        <input
          type="radio"
          id="Dulce de Leche"
          name="sabor"
          value="Dulce de Leche"
          onChange={(e) => setSabror(e.target.value)}
        />
        <label htmlFor="Dulce de Leche">Dulce de Leche</label>
        <input
          type="radio"
          id="Vainilla"
          name="sabor"
          value="Vainilla"
          onChange={(e) => setSabror(e.target.value)}
        />
        <label htmlFor="Vainilla">Vainilla</label>
        <br/>
        <p>Elige tu Marca Preferida</p>
        <select
          name="marca"
          onChange={(e) => setLenguaje(e.target.value)}
          defaultValue=""
        >
          <option value="">- - -</option>
          <option value="Ford">Ford</option>
          <option value="Honda">Honda</option>
          <option value="Fiat">Fiat</option>
          <option value="Renault">Renault</option>
          <option value="Chevrolet">Chevrolet</option>
          <option value="Peugeot">Peugeot</option>
          <option value="Volkswagen">Volkswagen</option>
          <option value="Toyota">Toyota</option>
        </select>
        <br />
        <label htmlFor="Terminos">Acepto Termino y Condiciones</label>        
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={(e) => setTerminos(e.target.checked)}
        />
        <br/>
        <input type="submit"/>
      </form>
      
    </>
  );
}
