import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import Suma from './Suma'
import Calculadora from './Calculadora'
import Dash from './Dash'
import Character from './Character'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [vista, setVista] = useState("home")
  const [selectedId, setSelectedId] = useState(null)

  // 👉 abrir personaje
  const verDetalle = (id) => {
    setSelectedId(id)
    setVista("character")
  }

  return (
    <>
      {/* HOME */}
      {vista === "home" && (
        <>
          <section id="center">
            <div className="hero">
              <img src={heroImg} className="base" width="170" height="179" alt="" />
              <img src={reactLogo} className="framework" alt="React logo" />
              <img src={viteLogo} className="vite" alt="Vite logo" />
            </div>

            <h1>Get started</h1>

            <button onClick={() => setCount(count + 1)}>
              Count is {count}
            </button>
          </section>

          <button onClick={() => setVista("suma")}>Suma</button>
          <button onClick={() => setVista("calculadora")}>Calculadora</button>
          <button onClick={() => setVista("dash")}>Dash</button>
        </>
      )}

      {/* SUMA */}
      {vista === "suma" && (
        <Suma regresar={() => setVista("home")} />
      )}

      {/* CALCULADORA */}
      {vista === "calculadora" && (
        <Calculadora regresar={() => setVista("home")} />
      )}

      {/* DASH */}
      {vista === "dash" && (
        <Dash
          regresar={() => setVista("home")}
          verDetalle={verDetalle}
        />
      )}

      {/* CHARACTER */}
      {vista === "character" && (
        <Character
          id={selectedId}
          regresar={() => setVista("dash")}
        />
      )}
    </>
  )
}

export default App