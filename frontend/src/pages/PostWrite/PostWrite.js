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

const PostWritePage = () => {
  return (
    <MainTemplate>
      <WriteProgressBar />
      <Switch>
        <Route path="/write/1" component={PhaseOne} />
        <Route path="/write/2" component={PhaseTwo} />
        <Route path="/write/3" component={PhaseThree} />
        <Route path="/write/4" component={PhaseFour} />
        <Route path="/write/5" component={PhaseFive} />
        <Route path="/write/6" component={PhaseSix} />
      </Switch>
      {/* <WriteProgress>아이콘여러개 진척도 ~~</WriteProgress>
      <section>가운데 내용 컴포넌트만 작성하면 될듯 ?</section>
      <div>이전단계 | 다음단계 버튼 섹션</div> */}
    </MainTemplate>
  );
};

PostWritePage.propTypes = {};

export default PostWritePage;

const WriteProgress = styled.div`
  margin-top: 85px;
`;
