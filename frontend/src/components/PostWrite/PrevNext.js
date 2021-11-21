import React from "react";
import { PrevNextBtn, SpaceBetween } from "./Title";

const PrevNext = () => {
  // 맨 첫장일땐 이전 단계가 없고
  // 맨 나중 장일 땐 다음 단계가 없어져야함
  // 버튼 누르면 앞뒤로 왔다갔다 해야함
  return (
    <SpaceBetween>
      <PrevNextBtn>{`< `} 이전단계</PrevNextBtn>
      <PrevNextBtn>다음단계 {` >`}</PrevNextBtn>
    </SpaceBetween>
  );
};

export default PrevNext;
