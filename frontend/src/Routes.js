import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LandingPage, MainPage, PostDetailPage, PostWritePage, SignUpPage } from "pages";
import Header from "components/Header/Header";
import WriteTmp from "pages/PostWrite/WriteTmp";
import { requestGet } from "utils/HttpMethod";
import { BASE_URL } from "utils/constants/request";

const Routes = (props) => {
  const getUser = async () => {
    const res = await requestGet(`${BASE_URL}/user`);
    console.log("res :", res);
  };
  useEffect(() => {
    getUser();
  }, []);
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
