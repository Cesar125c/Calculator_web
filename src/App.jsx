import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import Suma from './Suma'
import Calculadora from './Calculadora'
import Dash from './Dash'
import Character from './Character'
import Login from './Login'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [vista, setVista] = useState("login")
  const [selectedId, setSelectedId] = useState(null)
  const [logeado, setLogeado] = useState(false)

  const verDetalle = (id) => {
    setSelectedId(id)
    setVista("character")
  }

  const iniciarSesion = () => {
    setLogeado(true)
    setVista("home")
  }

  const cerrarSesion = () => {
    setLogeado(false)
    setVista("login")
  }

  return (
    <>
      {/* LOGIN */}
      {vista === "login" && (
        <Login onLogin={iniciarSesion} />
      )}

      {/* HOME */}
      {logeado && vista === "home" && (
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
          <button onClick={cerrarSesion}>Cerrar sesión</button>
        </>
      )}

      {/* SUMA */}
      {logeado && vista === "suma" && (
        <Suma regresar={() => setVista("home")} />
      )}

      {/* CALCULADORA */}
      {logeado && vista === "calculadora" && (
        <Calculadora regresar={() => setVista("home")} />
      )}

      {/* DASH */}
      {logeado && vista === "dash" && (
        <Dash
          regresar={() => setVista("home")}
          verDetalle={verDetalle}
        />
      )}

      {/* CHARACTER */}
      {logeado && vista === "character" && (
        <Character
          id={selectedId}
          regresar={() => setVista("dash")}
        />
      )}
    </>
  )
}

export default App