import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "styles/media";

const PostFilter = (props) => {
  return (
    <Container>
      <span>총 29건</span>
      <ToggleWrapper>
        <button></button>
        <span>진행중인 글만 보기</span>
      </ToggleWrapper>
    </Container>
  );
};

PostFilter.propTypes = {};

export default PostFilter;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 40px auto;
  /* 768 ~ 1280까지 width를 고정시켜야함.620px */
  @media ${device.tablet} {
    width: 620px;
  }
  @media ${device.desktop} {
    width: 1080px;
  }
`;
const ToggleWrapper = styled.div``;
