import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'src/styles/theme/DefaultTheme';
import { GlobalStyle } from 'src/styles/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <App />
      </ThemeProvider>
    </>
  </React.StrictMode>,
  document.getElementById('root'),
);
