import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(data => setPokemon(data))
      .catch(error => console.log(error))
  }, [id])

  if (!pokemon) {
    return <div>Loading...</div>
  }

  return (
    <div className='container mt-3'>
      <div className='card'>
        <div className='card-header'>
          <h3>{pokemon?.name}</h3>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-4'>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={pokemon?.name} className='img-fluid' />
            </div>
            <div className='col-md-8'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Stat</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {pokemon?.stats.map(stat => (
                    <tr key={stat.stat.name}>
                      <td>{stat.stat.name}</td>
                      <td>{stat.base_stat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail
