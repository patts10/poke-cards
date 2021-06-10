import React, { useEffect, useState } from 'react';
import '../index.css';
import { UpdatePokeCard } from './UpdatePokeCard';

export const PokeCardItem = ( { name, url, pokemons, setPokemons }) => {

  const [showModal, setShowModal] = useState(false);

  const openModal = ()=> {
    setShowModal( prev => !prev);
  };
  
  return (
    <>
    <button className="card animate__animated animate__fadeIn"
    onClick={ openModal }>
        <img 
          src={ url }
          alt={ name }
        />
        <p>{ name }</p>
    </button>
    <UpdatePokeCard showModal = {showModal} setShowModal={setShowModal} pokemons={pokemons} setPokemons={setPokemons} name={name} url={url}/>
    </>
  )
}