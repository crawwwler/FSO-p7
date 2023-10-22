import { createGlobalStyle, styled } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
    background-color: yellow;
    color: black;
    font-family:Georgia, serif;
}
`

export const GlobalFormStyle = createGlobalStyle`
form {
    font-family: Arial, sans-serif;
    background-color: yellow;
    padding: 10px;
    box-shadow: 1px 1px 3px rgba(0, 97, 0, 0.1);
  }

  form input {
    padding: 5px;
    margin: 10px 0;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

`

export const GlobalButtonStyle = createGlobalStyle`

button {
    background-color: black;
    color: white;
    padding: 5px 10px;
    border: none; 
    border-radius: 5px; 
    cursor: pointer; 
    transition: background-color 0.3s; 

    /* Hover state */
    &:hover {
        color: black;
      background-color: white;
    }
  }
`

export const GlobalLinks = createGlobalStyle`

  a{
    color: black;
    font-weight: bold;
    transition: color 0.3s;
  }

  a:hover{
    color: blue;
  }

`
