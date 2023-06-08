import { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [gifs, setGifs] = useState([]) // Lista de Gifs
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY
  // Las llamadas a API normalmente se hacen en el useEffect
  // Usaremos useEffect con un arreglo de dependencias vacío para que se ejecute solo una vez

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&rating=g`)
      .then(response => response.json())
      .then((results) => {
        console.log(results.data)
        setGifs(results.data)
      }).catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <h1>Giphy App</h1>
    </>
  )
}

export default App
