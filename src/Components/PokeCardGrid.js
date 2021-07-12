import React, { useState, useEffect } from 'react';
import { AddPokemon } from './AddPokemon';
import { PokeCardItem } from './PokeCardItem';

export const PokeCardGrid = ({ pokemonList}) => {

  const [pokemons, setPokemons] = useState( JSON.parse( localStorage.getItem('pokemons') ) || pokemonList);

  useEffect(() => {

    localStorage.setItem('pokemons', JSON.stringify(pokemons));

  }, [ pokemons ])

  return (
    <div>
      <h1>Poke Cards</h1>
      <h2>There are {pokemons.length} Pokemons in your pokedex</h2>
      <div className="card-grid">
        {
          pokemons.map( (pokemon) => (
            < PokeCardItem 
            key={ pokemon.id }
            { ...pokemon }
            pokemons={ pokemons }
            setPokemons={ setPokemons }        
            />
          ))
        }
        <AddPokemon 
        key={ pokemons.length }
        setPokemons={ setPokemons } />
      </div>
    </div>
  )
}
