import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LandingPage, MainPage, PostDetailPage, PostWritePage, SignUpPage } from "pages";
import Header from "components/Header/Header";
import WriteTmp from "pages/PostWrite/WriteTmp";

const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {/* landing page */}
          <LandingPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/main/:id" exact>
          {/* main page */}
          <Header />
          <MainPage />
        </Route>
        <Route path="/posts" exact>
          {/* 작성 page */}
          <Header />
          <PostWritePage />
        </Route>
        <Route path="/posts/:id" exact>
          <Header />
          <PostDetailPage />
        </Route>
        <Route path="/write">
          <Header />
          <PostWritePage />
        </Route>
        <Route path="/posts/:id" exact component={PostDetailPage} />
        <Route path="/write/:phase" component={PostWritePage} />
      </Switch>
    </Router>
  );
};

Routes.propTypes = {};

export default Routes;
