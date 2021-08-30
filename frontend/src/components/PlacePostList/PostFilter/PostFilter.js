import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "styles/media";
import OnOffButton from "components/common/OnOffButton";

const PostFilter = (props) => {
  return (
    <Container>
      <span>총 29건</span>
      <ToggleWrapper>
        <span>진행중인 글만 보기</span>
        <OnOffButton />
      </ToggleWrapper>
    </Container>
  );
};

PostFilter.propTypes = {};

export default PostFilter;

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 90%;
  height: 50px;
  margin: 0 auto;

  & > span {
    line-height: 50px;
    font-size: ${(props) => props.theme.middleFontSize};
  }

  /* 768 ~ 1280까지 width를 고정시켜야함.620px */
  @media ${device.tablet} {
    width: 620px;
  }
  @media ${device.desktop} {
    width: 1080px;
  }
`;
const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  & span {
    line-height: 50px;
    font-size: ${(props) => props.theme.badgeFontSize};
  }
`;
