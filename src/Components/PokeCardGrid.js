import React, { useState } from 'react';
import { AddPokemon } from './AddPokemon';
import { PokeCardItem } from './PokeCardItem';

export const PokeCardGrid = ({ pokemonList}) => {

  const [pokemons, setPokemons] = useState( pokemonList);

  return (
    <div>
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
