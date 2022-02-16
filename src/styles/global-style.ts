import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Kumbh Sans', 'Open Sans', 'Arial', 'Helvetica', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #root {
    max-width: 100vw;
    min-height: 100vh;
    font-size: 62.5%;
  }
`;

export default GlobalStyle;
