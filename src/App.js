import "./App.css";
import dakodev from "./imagenes/dakodev.png";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (nuevoValor) => {
    setInput(input + nuevoValor);
  };

  const borrarInput = () => {
    setInput("");
  };

  const borrarUltimoInput = () => {
    setInput(input.slice(0, -1));
  };

  const calcular = () => {
    if (input) {
      setInput(evaluate(input).toString());
    } else {
      alert("No hay nada que calcular");
    }
  };
  return (
    <div className="App">
      <div className="logoDakodevContenedor">
        <img className="logoDakodev" src={dakodev} alt="logoDakodev" />
      </div>
      <div className="contenedorCalculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={calcular}>=</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={borrarInput}>AC</Boton>
          <Boton manejarClick={borrarUltimoInput}>DEL</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
