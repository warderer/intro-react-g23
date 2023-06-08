import { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard'
import SearchBar from './components/SearchBar'
import './App.css'

function App () {
  const [gifs, setGifs] = useState([]) // Lista de Gifs
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY
  // Las llamadas a API normalmente se hacen en el useEffect
  // Usaremos useEffect con un arreglo de dependencias vacío para que se ejecute solo una vez

  const sendSearch = (search) => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=25&offset=0&rating=g&lang=en`)
      .then(response => response.json())
      .then((results) => {
        console.log(results.data)
        setGifs(results.data)
      }).catch((error) => {
        console.error(error)
      })
  }

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
      <div className='App'>
        <SearchBar handleSearch={sendSearch} />

        <div className='grid-cards'>
          {
            gifs.map(gif => (
              <ImageCard
                key={gif.id}
                url={gif.images.fixed_height.url}
                title={gif.title}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
