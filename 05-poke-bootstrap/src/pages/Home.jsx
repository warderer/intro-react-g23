import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [pokemons, setPokemons] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => setPokemons(data.results))
      .catch(error => console.log(error))
  }, [])

  const handleInputChange = event => {
    setSearchTerm(event.target.value)
  }

  const filteredPokemons = pokemons.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <>
      <div className='container'>
        <h1>Pokédex</h1>

        <form className='form-inline my-2 my-lg-0 w-75'>
          <input type='text' className='form-control' id='search' placeholder='Enter name' value={searchTerm} onChange={handleInputChange} />
        </form>

        <div className='row'>
          {filteredPokemons.map(pokemon => (
            <div className='col-sm-4 mb-4' key={pokemon.name}>
              <div className='card'>
                <img className='card-img-top' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt={pokemon.name} />
                <div className='card-body'>
                  <Link to={`/pokemon/${pokemon.url.split('/')[6]}`}>
                    <h4 className='card-title'>{pokemon.name}</h4>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default Home
