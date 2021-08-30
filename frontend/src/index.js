import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "styles/GlobalStyle";
import { DarkTheme } from "styles/theme/DefaultTheme";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <ThemeProvider theme={DarkTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
