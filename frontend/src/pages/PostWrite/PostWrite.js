import React from "react";
import MainTemplate from "components/Template/MainTemplate";
import styled from "styled-components";
import { Route, Switch } from "react-router";
import PhaseOne from "components/PostWrite/PhaseOne";
import PhaseTwo from "components/PostWrite/PhaseTwo";
import PhaseThree from "components/PostWrite/PhaseThree";
import PhaseFour from "components/PostWrite/PhaseFour";
import PhaseFive from "components/PostWrite/PhaseFive";
import PhaseSix from "components/PostWrite/PhaseSix";
import WriteProgressBar from "components/common/WriteProgressBar";
import PrevNext from "components/PostWrite/common/PrevNext";
import WritedContentCheck from "components/PostWrite/WritedContentCheck";

const PostWritePage = () => {
  return (
    <MainTemplate>
      <WriteProgressBar />
      <Switch>
        <Route path="/write/1" component={PhaseOne} />
        <Route path="/write/2" component={PhaseTwo} />
        <Route path="/write/3" component={PhaseThree} />
        <Section>
          <Route path="/write/4" component={PhaseFour} />
          <Route path="/write/5" component={PhaseFive} />
          <Route path="/write/6" component={PhaseSix} />
          <Route path="/write/7" component={WritedContentCheck} />
        </Section>
      </Switch>
    </MainTemplate>
  );
};

PostWritePage.propTypes = {};

export default PostWritePage;

const WriteProgress = styled.div`
  margin-top: 85px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
