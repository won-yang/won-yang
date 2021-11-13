import usePathname from "hooks/usePathname";
import React from "react";
import { Link } from "react-router-dom";
import { PrevNextBtn, SpaceBetween } from "./Title";

const PrevNext = (props) => {
  const { isPrevDisabled, isNextDisabled } = props;
  const { getWritePhase } = usePathname();

  const getNextPhase = () => {
    return parseInt(getWritePhase(), 10) + 1;
  };
  const getPrevPhase = () => {
    return parseInt(getWritePhase(), 10) - 1;
  };
  return (
    <SpaceBetween>
      <Link to={`/write/${getPrevPhase()}`}>
        <PrevNextBtn disabled={isPrevDisabled} deactivated={isPrevDisabled}>
          {`< `} 이전단계
        </PrevNextBtn>
      </Link>
      <Link to={`/write/${getNextPhase()}`}>
        <PrevNextBtn disabled={isNextDisabled} deactivated={isNextDisabled}>
          다음단계 {` >`}
        </PrevNextBtn>
      </Link>
    </SpaceBetween>
  );
};

export default PrevNext;
