import React from "react";
import { Link } from "react-router-dom";
import { PrevNextBtn, SpaceBetween } from "./Title";

const PrevNext = (props) => {
  const { isPrevDisabled, isNextDisabled, currentPhase } = props;
  return (
    <SpaceBetween>
      <Link to={`/write/3`}>
        <PrevNextBtn disabled={true} deactivated={true}>
          {`< `} 이전단계
        </PrevNextBtn>
      </Link>
      <PrevNextBtn disabled={isNextDisabled} deactivated={isNextDisabled}>
        다음단계 {` >`}
      </PrevNextBtn>
    </SpaceBetween>
  );
};

export default PrevNext;
