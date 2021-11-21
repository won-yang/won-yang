import React from "react";
import { PrevNextBtn, SpaceBetween } from "components/PostWrite/common";

const PrevNext = () => {
  return (
    <SpaceBetween>
      <PrevNextBtn>{`< `} 이전단계</PrevNextBtn>
      <PrevNextBtn>다음단계 {` >`}</PrevNextBtn>
    </SpaceBetween>
  );
};

export default PrevNext;