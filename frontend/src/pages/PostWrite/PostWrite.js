import React from "react";
import MainTemplate from "components/Template/MainTemplate";
import styled from "styled-components";

const PostWritePage = () => {
  return (
    <MainTemplate>
      <WriteProgress>아이콘여러개 진척도 ~~</WriteProgress>
      <section>가운데 내용 컴포넌트만 작성하면 될듯 ?</section>
      <div>이전단계 | 다음단계 버튼 섹션</div>
    </MainTemplate>
  );
};

PostWritePage.propTypes = {};

export default PostWritePage;

const WriteProgress = styled.div`
  margin-top: 85px;
`;
