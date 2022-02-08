// no funciono el snippets!!!

import React from "react";
import styled, { css } from "styled-components";


let mainColor = "#db7093",
  mainAlphaColor80 = "#db709380";
const MyH3 = styled.h3`
  padding: 2rem;
  text-align: center;
  background-color: ${mainColor};
  
 
  

  &:hove {
    background-color: ${mainAlphaColor80};
  }
`;
export default function ComponentesEstilizados() {



  return (
    <>
      <h2>Styled-Components</h2>
      <MyH3>Hola, Soy un Componente con Estilos de Styled Components</MyH3>
    </>
  );
}
