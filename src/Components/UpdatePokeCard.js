import React, { useState } from 'react'
import '../index.css';
import { Background, ModalContent, ModalWrapper } from '../globalStyles';

export const UpdatePokeCard = ( { showModal, setShowModal, name, url, pokemons, setPokemons }) => {

  const [inputName, setInputName] = useState(name);
  const [inputUrl, setInputUrl] = useState(url);


const inputChangeName = (e) =>{
  setInputName(e.target.value);
}

const inputChangeUrl = (e) =>{
  setInputUrl(e.target.value);
}


const handleDelete = () => {
  const tempPokemons = [];
  console.log(pokemons)
  pokemons.forEach((pokemon, i) => {
    if( pokemon.name !== inputName ) {
      tempPokemons.push(pokemon)
    }
  });
  console.log('Temp');
  console.log(tempPokemons);
  setPokemons( tempPokemons);
  setShowModal( prev => !prev);
}

const handleSubmit = (e) => {
  e.preventDefault();
  
  pokemons.forEach(pokemon => {
    if( pokemon.name === name ) {
      pokemon.name = inputName;
      pokemon.url = inputUrl
    }
  });
  setPokemons( c => [ 
    ...c ]);
  setShowModal( prev => !prev);
}

const handleCancel = () =>{
  setShowModal( prev => !prev);
}

  return (
    <>
      {
        showModal ? (
          <Background>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                  <div className="field">
                    <p>
                      name:
                    </p>
                    <input type="text" 
                    value={inputName} 
                    placeholder='Type a name' 
                    onChange={ inputChangeName }
                    required/> 
                  </div>  
                  <div className="field">
                    <p>
                      Image Url:
                    </p>
                    <input type="text" 
                    value={inputUrl} 
                    placeholder="A link to pokemon's Image" 
                    onChange={ inputChangeUrl }
                    required/> 
                  </div>
                  <img className="img-update"
                  onClick={handleDelete}
                    src={ url }
                    alt={ name }
                  />
                  <div className="buttons">
                  <img className="delete"
                  onClick={handleDelete}
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREKR4KhqGBxloJ_5K7SJbUn16IW-lGIbpTlxdvnnlpSdeWX339lG_wclw3FfCNHv72EN4&usqp=CAU'
                  alt="delete"
                  />
                  <button className="submitBtn btn btn-primary" onClick={ handleCancel } >Cancel</button>
                  <button className="submitBtn btn btn-primary" onClick={ handleSubmit } >Save</button>
                  </div>
              </ModalContent>
            </ModalWrapper>
          </Background>
      
        ): null

      }
      {/* <PokeCardGrid pokemons={pokemons} /> */}
  </>
  )
}
