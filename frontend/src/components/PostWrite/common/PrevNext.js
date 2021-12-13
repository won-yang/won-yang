import usePathname from "hooks/usePathname";
import React from "react";
import { Link } from "react-router-dom";
import { PrevNextBtn, SpaceBetween } from "components/PostWrite/common";

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
    <SpaceBetween prevPhase={getPrevPhase() % 3 === 0}>
      <Link to={`/write/${getPrevPhase()}`}>
        <PrevNextBtn
          prevPhase={getPrevPhase() % 3 === 0}
          disabled={isPrevDisabled}
          deactivated={isPrevDisabled}
        >
          {`< `} 이전단계
        </PrevNextBtn>
      </Link>
      <Link to={`/write/${getNextPhase()}`}>
        <PrevNextBtn
          prevPhase={getPrevPhase() % 3 === 0}
          disabled={isNextDisabled}
          deactivated={isNextDisabled}
        >
          다음단계 {` >`}
        </PrevNextBtn>
      </Link>
    </SpaceBetween>
  );
};

export default PrevNext;
