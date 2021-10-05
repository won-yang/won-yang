import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "styles/GlobalStyle";
import { DarkTheme } from "styles/theme/DefaultTheme";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import Routes from "Routes";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={DarkTheme}>
      <Reset />
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
