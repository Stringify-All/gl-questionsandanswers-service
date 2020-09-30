import { createGlobalStyle } from 'styled-components';

// @//import styled, { injectGlobal } from 'styled-components';
// @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap')
// @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');

// main page elements
//  (background color, border color)
//  (font family, size, color)

const GlobalStyle = createGlobalStyle`

  h1 {
    font-family: 'Roboto', 'sans-serif';
    font-weight: 50;
    background-color: white;
    font-size: 20px;
    color: #056676;
    title: 'Center Title':
    alignSelf: 'center'
  }

  body {
    margin: 30 auto;
    background-color: white;
    font-family: 'Ubuntu', sans-serif;
    font-size: 18px;
    color: #056676;
    text-align: 'center'
  }

  button {
    background-color: white;
    font-family: 'Ubuntu', sans-serif;
    border-color: #056676;
    color: #056676;
    border: 1px solid-#e8ded2;
    border-radius: 4px;
    padding: 5px 90px;
    text-align: center;
  }

  button:hover {
    color: #e8ded2;
    border: 2px solid #056676;
    background: #056676;
    box-shadow: 0 1px 0 #5eaaa8;
    transition-timing-function: ease-in;
    transition: .3s;
  }

  .answer {
    font-family: 'Roboto', 'sans-serif';
    font-size: 16px;
    color: #5EAAA8;
  }
`;
export default GlobalStyle;
