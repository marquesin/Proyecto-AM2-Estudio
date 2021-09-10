import React from "react";
import "./QueHacemos.css";
import icon1 from "./Img/Icons/Icon 1.svg";
import icon2 from "./Img/Icons/Icon 2.svg";
import icon3 from "./Img/Icons/Icon 3.svg";

export default function QueHacemos() {
  return (
    <section>
      <h2 className="titleDeSectiones">QUÉ HACEMOS</h2>
      <div>
        iconos presionables y servicios desplegados
        <img src={icon1} alt="" className="iconServicios" />
        <img src={icon2} alt="" />
        <img src={icon3} alt="" />
      </div>
      <button>NUESTRO BOOK</button>
    </section>
  );
}
