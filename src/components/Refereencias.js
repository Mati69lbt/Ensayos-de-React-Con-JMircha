import React, { createRef, useRef } from "react";

function Referencias() {
    let refMenu = useRef()
    let refMenuBtn = useRef()
    
    console.log(refMenu, refMenuBtn);
    
    const handleToglleMenu = (e) => {

    // const $menu = document.getElementById("menu");
    // if (e.target.textContent === "Menu") {
    //   e.target.textContent = "Cerrar";
    //   $menu.style.display = "block";
    // } else {
    //   e.target.textContent = "Menu";
    //   $menu.style.display = "none";
    // }


    if (refMenuBtn.current.textContent === "Menu") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menu";
      refMenu.current.style.display = "none";
    }

  };

  return (
    <>
      <h2>Referencias</h2>
      <button
      ref={refMenuBtn}
        id="menu-btn"
        onClick={handleToglleMenu}
        style={{ fontSize: "20px" }}
      >
        Menu
      </button>
      <nav id="menu" ref={refMenu} style={{ dispaly: "none", fontSize: "28px" }}>
        <a href="#">Seccion 1</a>
        <br />
        <a href="#">Seccion 2</a>
        <br />
        <a href="#">Seccion 3</a>
        <br />
        <a href="#">Seccion 4</a>
        <br />
        <a href="#">Seccion 5</a>
      </nav>
    </>
  );
}

export default Referencias;
