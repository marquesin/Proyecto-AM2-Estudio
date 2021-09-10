import React from "react";
import "./Header.css";
import logo from "./img/icon/am2 logo.svg";

export default function Header() {
  return (
    <header className="containerHeader">
      <div className="header">
        <div className="containerLogo">
          <img src={logo} alt="Logo am2" />
        </div>
        <div className="headerButtton">
          <a href="#" target="_blank">
            <li className="item-header">HOME</li>
          </a>
          <a href="#" target="_blank">
            <li className="item-header">CÓMO TRABAJAMOS</li>
          </a>
          <a href="#" target="_blank">
            <li className="item-header">QUÉ HACEMOS</li>
          </a>
          <button className="buttonHeader">CONTACTO</button>
          <div>icFACE</div>
          <div>icIG</div>
        </div>
      </div>
    </header>
  );
}
