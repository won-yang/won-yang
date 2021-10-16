import React from "react";
import MainTemplate from "components/Template/MainTemplate";
import styled from "styled-components";
import PhaseFive from "components/PostWrite/PhaseFive";

const WriteTmp = () => {
  return (
    <MainTemplate>
      <WriteProgress>아이콘여러개 진척도 ~~</WriteProgress>
      <Section>
        <PhaseFive />
      </Section>
      <div>이전단계 | 다음단계 버튼 섹션</div>
    </MainTemplate>
  );
};

WriteTmp.propTypes = {};

export default WriteTmp;

const WriteProgress = styled.div`
  margin-top: 85px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
