import React, { useState } from 'react';
import '../index.css';
import { GlobalStyle } from '../globalStyles';
import { NewPokeCard } from './NewPokeCard';

export const AddPokemon = ( { setPokemons } ) => {
  
  const [showModal, setShowModal] = useState(false);

  const openModal = ()=> {
    setShowModal( prev => !prev);
  };


  return (
    <>
      <button 
      className="card animate__animated animate__fadeIn addNew"
      onClick={ openModal }
      ><p>+</p>
      <p className="addNewText">Add New</p>
      </button>
      <NewPokeCard showModal = {showModal} setShowModal={setShowModal} setPokemons={setPokemons}/>
      <GlobalStyle />
    </>
  )
}
