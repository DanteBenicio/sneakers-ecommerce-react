import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import { theme } from './theme';
import Home from './pages/Home';
import GlobalStyle from './styles/global-style';
import ModalContainer from './components/ModalContainer';
import ContextProvider from './context';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ContextProvider>
        <ModalContainer />
        <Navbar />
        <Home />
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
