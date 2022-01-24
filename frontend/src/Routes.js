import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  LandingPage,
  MainPage,
  PostDetailPage,
  PostWritePage,
  SignUpPage,
  NotReadyPage,
} from "pages";
import Header from "components/Header/Header";
import withAuth from "components/Auth/withAuth";

const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <>
          <Header />
          <Route path="/main/:id" component={withAuth(MainPage)}></Route>
          <Route path="/posts" exact component={withAuth(PostWritePage)}></Route>
          <Route path="/posts/:id" exact component={withAuth(PostDetailPage)}></Route>
          {/* <Route path="/write" exact component={withAuth(PostWritePage)}></Route> */}
          <Route path="/write/:phase" component={withAuth(PostWritePage)} />
        </>
        <Route path="/posts/:id" exact component={PostDetailPage} />
        <Route path="/not-ready" component={NotReadyPage} />
      </Switch>
    </Router>
  );
};

Routes.propTypes = {};

export default Routes;
