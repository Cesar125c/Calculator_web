import { useEffect, useState } from "react"

function Character({ id, regresar }) {
  const [character, setCharacter] = useState(null)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(data => setCharacter(data))
  }, [id])

  if (!character) return <p>Cargando...</p>

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={regresar}>⬅ Volver</button>

      <h1>{character.name}</h1>

      <img src={character.image} alt={character.name} />

      <p><b>Status:</b> {character.status}</p>
      <p><b>Species:</b> {character.species}</p>
      <p><b>Gender:</b> {character.gender}</p>
      <p><b>Origin:</b> {character.origin.name}</p>
      <p><b>Location:</b> {character.location.name}</p>
    </div>
  )
}

export default Character