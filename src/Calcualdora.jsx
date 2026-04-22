import { useState } from "react";

function Calculadora({ regresar }) {
  const [expresion, setExpresion] = useState("");

  // 👉 Agregar números u operadores
  const agregar = (valor) => {
    setExpresion(expresion + valor);
  };

  // 👉 Calcular TODO (muchos números)
  const calcular = () => {
    try {
      const resultado = eval(expresion);

      if (!isFinite(resultado)) {
        alert("Operación inválida");
        return;
      }

      setExpresion(resultado.toString());
    } catch {
      alert("Expresión inválida");
    }
  };

  // 👉 Limpiar
  const limpiar = () => {
    setExpresion("");
  };

  return (
    <div>
      <h1>Calculadora</h1>

      {/* Pantalla */}
      <h2>{expresion || 0}</h2>

      <div>
        <button onClick={() => agregar("1")}>1</button>
        <button onClick={() => agregar("2")}>2</button>
        <button onClick={() => agregar("3")}>3</button>
        <button onClick={() => agregar("+")}>+</button>
      </div>

      <div>
        <button onClick={() => agregar("4")}>4</button>
        <button onClick={() => agregar("5")}>5</button>
        <button onClick={() => agregar("6")}>6</button>
        <button onClick={() => agregar("-")}>-</button>
      </div>

      <div>
        <button onClick={() => agregar("7")}>7</button>
        <button onClick={() => agregar("8")}>8</button>
        <button onClick={() => agregar("9")}>9</button>
        <button onClick={() => agregar("*")}>*</button>
      </div>

      <div>
        <button onClick={() => agregar("0")}>0</button>
        <button onClick={calcular}>=</button>
        <button onClick={limpiar}>C</button>
        <button onClick={() => agregar("/")}>/</button>
      </div>

      <br />

      <button onClick={regresar}>Volver</button>
    </div>
  );
}

export default Calculadora;