import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import BannerHome from "../Home/BannerHome/BannerHome";
import ComoTrabajamos from "../Home/ComoTrabajamos/ComoTrabajamos";
import Contacto from "../Home/Contacto/Contacto";
import QueHacemos from "../Home/QueHacemos/QueHacemos";
import "./Container.css";

export default function Container() {
  return (
    <div>
      <Header />
      <BannerHome />
      <ComoTrabajamos />
      <QueHacemos />
      <Contacto />
      <Footer />
    </div>
  );
}
