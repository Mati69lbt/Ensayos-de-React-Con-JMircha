import React from 'react';
import './Estilos.css'

export default function Estilos() {
    let myStyle = {
        borderRadius: "5rem",
        margin: "2rem auto",
        maxWidth:"50%"
    }
  return (
      <section className='Estilos'>
          <h2>Estilos CSS en React</h2>
          <h3 className='bg-react'> Estilos en hoja  CSS Externa</h3>
          <h3 className='bg-react' style={{borderRadius:"25rem", margin:"1rem" }}>Estilo en Linea(atributo Style)</h3>
          <h3 className='bg-react' style={myStyle}>Estilos en Linea</h3>
          <h3 className='bg-react'> Agregando Normalize.com</h3>
      </section>
  )
}
