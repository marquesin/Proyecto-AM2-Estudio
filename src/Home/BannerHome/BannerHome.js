import React from "react";
import "./BannerHome.css";
import rombo from "./img/Subtraction 7.svg";

export default function BannerHome() {
  return (
    <>
      <section className="containerBannerHome">
        <div className="containerTitles">
          <div>
            <h1 className="titleHome">
              THINK<samp className="punto1BannerHome">.</samp>
            </h1>
            <h1 className="titleHome">
              DO<samp className="punto2BannerHome">.</samp>
            </h1>
            <h1 className="titleHome">
              CREATE<samp className="punto3BannerHome">.</samp>
            </h1>
          </div>
          <div className="containerButtonHome">
            <button className="buttonHome">VER SERVICIOS</button>
          </div>
        </div>
        <div className="containerFotoHome">
          <img src={rombo} alt="Imagen banner" />
        </div>
      </section>
      <section className="containerPBanner">
        <p className="pBanner">
          Somos una agencia especializada en creatividad y diseño, conformada
          con profesionales certificados internacionalmente en Project
          Management, Design Thinking y metodologías ágiles. Contamos con más de
          10 años en experiencia en proyectos para compañías internacionales y
          marcas de renombre.
        </p>
      </section>
    </>
  );
}
