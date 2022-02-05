import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    //console.log("Moviendo el Scroll");

    const detectarScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectarScroll);
  }, [scrollY]);
//   useEffect(() => {
//     console.log("Fase de Montaje");
//   }, []);
//   useEffect(() => {
//     console.log("Fase De Actualizacion");
//   });
//   useEffect(() => {
//     return () => {
//       console.log("Fase De Desmontaje");
//     };
//   });

  return (
    <>
      <h2>Hooks - useEffect y el Ciclo de Vida</h2>
      <p>Srcoll y del navegador {scrollY}px</p>
    </>
  );
}
