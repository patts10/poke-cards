import React from 'react'
import { PokeCardGrid } from './PokeCardGrid'

export const PokeView = () => {

  const pokemonList = [
    {
      id: 0,
    name: 'Mewtwo',
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"
    },
    {
      id: 1,
    name: 'Pikachu',
    url: 'https://forums.pokemmo.eu/uploads/monthly_2021_04/Pikachu.jpg.4beb42244ba209f0492c5543093dee81.jpg'
    },
    {
      id: 2,
    name: 'Bulbasaur',
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
    },
    {
      id: 3,
    name: 'Charizard',
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
    }

  ];

  return (
    <>
      <PokeCardGrid pokemonList={ pokemonList } />
    </>
  )
}
