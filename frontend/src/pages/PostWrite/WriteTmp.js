import React from "react";
import MainTemplate from "components/Template/MainTemplate";
import styled from "styled-components";
import PhaseFive from "components/PostWrite/PhaseFive";
import PhaseFour from "components/PostWrite/PhaseFour";
import PrevNext from "components/PostWrite/PrevNext";
import WriteProgressBar from "components/common/WriteProgressBar";

const WriteTmp = () => {
  return (
    <MainTemplate>
      <WriteProgressBar />
      <Section>
        <PhaseFive />
      </Section>
      <div>이전단계 | 다음단계 버튼 섹션</div>
      <PrevNext />
    </MainTemplate>
  );
};

WriteTmp.propTypes = {};

export default WriteTmp;

const WriteProgress = styled.div``;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
