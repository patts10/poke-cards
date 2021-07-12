import React, { useState, useEffect } from 'react';
import { AddPokemon } from './AddPokemon';
import { PokeCardItem } from './PokeCardItem';

export const PokeCardGrid = ({ pokemonList}) => {

  const [pokemons, setPokemons] = useState( pokemonList = JSON.parse( localStorage.getItem('pokemons') ));


  // localStorage.setItem('pokemons', JSON.stringify(defaultList));

  // const pokemonList = JSON.parse( localStorage.getItem('pokemons') );
  // setPokemons( pokemon);

  useEffect(() => {
    console.log('hello pattss');
    console.log(pokemons);
    localStorage.setItem('pokemons', JSON.stringify(pokemons));

  }, [ pokemons ])

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
