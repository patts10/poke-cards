import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
  box-sizing: border-box;
  margin: 0, auto;
  padding: 0;
  font-family: 'Arial', sans-serif;
}
`
export const Background = styled.div`
  width: 70%;
  heigth: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:5;
  margin: 0 auto;
`
export const ModalWrapper = styled.div`
  width: 400px;
  height: 500px;
  padding: 10px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr;
  position relative;
  z-index: 10;
  border-radius: 10px;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-top: 0px;

  p {
    margin-bottom: 0.7rem;
    margin-top: 30px;
  }

  input {
    border-radius: 10px;
    background: #49afa8;
    color: white;
  }


`