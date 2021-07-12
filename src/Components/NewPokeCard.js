import React, { useState } from 'react';
import '../index.css';
import { Background, ModalContent, ModalWrapper } from '../globalStyles';


export const NewPokeCard = ( { showModal, setShowModal, setPokemons }) => {

const [inputName, setInputName] = useState('');
const [inputUrl, setInputUrl] = useState('')


const inputChangeName = (e) =>{
  setInputName(e.target.value);
}

const inputChangeUrl = (e) =>{
  setInputUrl(e.target.value);
}

const handleSubmit = (e) => {
  e.preventDefault();

  setPokemons( c => [ 
    ...c,
    {
      id: c.length,
      name: inputName,
      url: inputUrl
    } ]);
  setInputName('');
  setInputUrl('');
}

const handleCancel = () =>{
  setShowModal( prev => !prev);
  setInputName('');
  setInputUrl('');
}


  return (
    <>
      {
        showModal ? (
          <Background >
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
                  {
                    inputUrl &&
                  <img className="img-update"
                    src={ inputUrl }
                    alt={ inputName }
                  />
                  }
                  <div  className="buttons">
                    <button className="submitBtn btn btn-primary" onClick={ handleCancel }>Cancel</button>
                    <button className="submitBtn btn btn-primary" onClick={ handleSubmit }>Save</button>
                  </div>
              </ModalContent>
            </ModalWrapper>
          </Background>
      
        ): null

      }
  </>
  )
}
  