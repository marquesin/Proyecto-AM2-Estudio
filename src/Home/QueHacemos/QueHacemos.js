import React from "react";
import "./QueHacemos.css";
import icon1 from "./Img/Icons/Icon 1.svg";
import icon2 from "./Img/Icons/Icon 2.svg";
import icon3 from "./Img/Icons/Icon 3.svg";
import ServiciosDesplegados from "./Servicios/ServiciosDesplegados";

export default function QueHacemos() {
  return (
    <section className="containerQH">
      <h2 className="titleDeSectiones QH">QUÉ HACEMOS</h2>
      <div className="containerButtonQH">
        <div>
          <img src={icon1} alt="" />
          <h1 className="title-Icon-QH">MARKETING</h1>
        </div>
        <div className="linea" />
        <div>
          <img src={icon2} alt="" />
          <h1 className="title-Icon-QH">DISEÑO</h1>
        </div>
        <div className="linea" />
        <div>
          <img src={icon3} alt="" />
          <h1 className="title-Icon-QH">PRINT</h1>
        </div>
      </div>
      <ServiciosDesplegados />
      <button>NUESTRO BOOK</button>
    </section>
  );
}
