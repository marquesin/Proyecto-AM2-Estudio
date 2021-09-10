import React from "react";
import "./ComoTrabajamos.css";

export default function ComoTrabajamos() {
  return (
    <section className="containerComoTrabajamos">
      <h2 className="titleDeSectiones">
        CÓMO TRABAJAMOS<samp className="titleDeSectionesColor">.</samp>
      </h2>
      <div className="containerCuadriculaComoTrabajamos">
        <div className="item-CT1">
          <div className="text-CT">
            <h3 className="title-item-CT">DIVE DEEP</h3>
            <p className="p-item-CT">
              Investigamos contigo para llegar a la pregunta clave a resolver.
            </p>
          </div>
        </div>
        <div className="item-CT2">
          <div className="text-CT-Botton">
            <h3 className="title-item-CT">ESTRATEGIA</h3>
            <p className="p-item-CT">Identificamos</p>
          </div>
        </div>
        <div className="item-CT3">
          <div className="text-CT">
            <h3 className="title-item-CT">DISEÑO E IMPLEMENTACIÓN</h3>
            <p className="p-item-CT">
              Planeamos el camino a seguir que nos lleve a la meta.
            </p>
          </div>
        </div>
        <div className="item-CT4">
          <div className="text-CT-Botton">
            <h3 className="title-item-CT">SEGUIMIENTO Y OPTIMIZACIÓN</h3>
            <p className="p-item-CT">
              Si tienes una idea, proyecto o reto, con gusto lo revisamos
              juntos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
