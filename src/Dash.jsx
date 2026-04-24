import { useEffect, useState } from "react"

function Dash({ regresar, verDetalle }) {
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(data => setCharacters(data.results))
  }, [])

  const filtered = characters.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={regresar}>⬅ Volver</button>

      <h1>Rick and Morty Dashboard</h1>

      <input
        type="text"
        placeholder="Buscar personaje..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", width: "300px", marginBottom: "20px" }}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {filtered.map((char) => (
          <div
            key={char.id}
            onClick={() => verDetalle(char.id)}
            style={{
              width: "200px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              textAlign: "center",
              cursor: "pointer"
            }}
          >
            <img
              src={char.image}
              alt={char.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />

            <h3>{char.name}</h3>
            <p>{char.status}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dash