import { useState } from "react";

function Suma({ regresar }) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const sumar = () => {
    const resultado = parseFloat(num1) + parseFloat(num2);

    if (isNaN(resultado)) {
      alert("Ingresa números válidos");
      return;
    }

    alert("Resultado: " + resultado);
  };

  return (
    <div>
      <h1>Suma de dos números</h1>

      <input
        type="number"
        placeholder="Número 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br />

      <input
        type="number"
        placeholder="Número 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br />

      <button onClick={sumar}>Resultado</button>

      <br /><br />

      <button onClick={regresar}>Volver</button>
    </div>
  );
}

export default Suma;