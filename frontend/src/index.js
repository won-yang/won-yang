import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "styles/GlobalStyle";
import { DarkTheme } from "styles/theme/DefaultTheme";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import Routes from "Routes";
import { Provider } from "react-redux";
import { store } from "store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={DarkTheme}>
        <Reset />
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
