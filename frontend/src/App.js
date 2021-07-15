import React from 'react';
import UnivSearchbar from 'components/Univ';
import Header from 'components/Header';
import { LandingPage, MainPage, PostDetailPage, PostWritePage } from 'pages';
import GlobalStyle from 'styles/GlobalStyle';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalStyle />
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
    </Router>
  );
}

export default App;
