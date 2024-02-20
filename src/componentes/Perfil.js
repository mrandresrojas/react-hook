import React from "react";
import "../estilos/Perfil.css";
import Contador from "./Contador";

function Perfil(props) {
  return (
    <div className="contenedor-perfil">
      <img
        className="imagen-perfil"
        src={require(`../imagenes/perfil-${props.imagen}.png`)}
        alt="Foto de desarrollador"
      />
      <div className="contenedor-texto-perfil">
        <p className="nombre-perfil">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-perfil">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-perfil">"{props.perfil}" </p>
      </div>
      {/*Botones para redes sociales*/}
      <button onClick={() => window.open(props.linkedin, "_blank")}>Linkedin<Contador /> </button>
      <button onClick={() => window.open(props.youtube, "_blank")}>YouTube<Contador /></button>
      <button onClick={() => window.open(props.twitter, "_blank")}>Twitter<Contador /></button>
    </div>

  );
}
export default Perfil;
