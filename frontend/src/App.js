import React from "react";
import {
  SignUpPage,
  LandingPage,
  MainPage,
  PostDetailPage,
  PostWritePage,
} from "pages";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { DarkTheme } from "styles/theme/DefaultTheme";
import UnivSearchbar from "./components/Univ/UnivSearchBar";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={DarkTheme}>
        <Switch>
          <Route path='/univ-search'>
            <UnivSearchbar />
          </Route>
          <Route path='/signup'>
            <SignUpPage />
          </Route>
          <Route path='/' exact>
            {/* landing page */}
            <LandingPage />
          </Route>
          <Route path='/main'>
            {/* main page */}
            <MainPage />
          </Route>
          <Route path='/posts'>
            {/* 작성 page */}
            <PostWritePage />
          </Route>
          <Route path='/posts/:id'>
            {/* 게시글보기 page */}
            <PostDetailPage />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
