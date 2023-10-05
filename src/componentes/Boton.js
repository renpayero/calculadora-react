import React from "react";
import "../stylesheets/Boton.css";

function Boton(props) {
  const esOperador = (val) => {
    return isNaN(val) && val != "." && val != "=";
  };

  return (
    <div
      className={`botonContenedor ${
        esOperador(props.children) ? "operador" : null
      }`.trimEnd()}
      onClick={() => props.manejarClick(props.children)}
    >
      {props.children}
    </div>
  );
}
export default Boton;
