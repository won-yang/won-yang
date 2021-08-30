import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LandingPage, MainPage, PostDetailPage, PostWritePage } from "pages";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "styles/theme/DefaultTheme";
import Header from "components/Header/Header";

const Routes = (props) => {
  return (
    <Router>
      <Header />
      <ThemeProvider theme={DarkTheme}>
        <Switch>
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
};

Routes.propTypes = {};

export default Routes;
