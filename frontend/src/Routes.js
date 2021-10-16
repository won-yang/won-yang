import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LandingPage, MainPage, PostDetailPage, PostWritePage, SignUpPage } from "pages";
import Header from "components/Header/Header";
import WriteTmp from "pages/PostWrite/WriteTmp";

const Routes = (props) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          {/* landing page */}
          <LandingPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/main">
          {/* main page */}
          <MainPage />
        </Route>
        <Route path="/posts" exact>
          {/* 작성 page */}
          <PostWritePage />
        </Route>
        <Route path="/posts/:id" exact component={PostDetailPage} />
        <Route path="/tmp" exact component={PostWritePage} />
        <Route path="/t" exact component={WriteTmp} />
      </Switch>
    </Router>
  );
};

Routes.propTypes = {};

export default Routes;
