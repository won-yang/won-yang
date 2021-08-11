import React from "react";
import PropTypes from "prop-types";
import tempImg from "assets/nong.png";
import styled from "styled-components";
import { device } from "styles/media";

const PlacePostItem = (props) => {
  return (
    <Container>
      <ImageWrapper>
        <img size='50px' src={tempImg} alt='place picture'></img>
      </ImageWrapper>
      <ItemInfo>
        <span>태평동 원룸 양도합니다</span>
        <span>기타</span>
        <span>보증금 500</span>
        <span>월세 40</span>
        <span>경기도 성남시 태평동 5109 202호</span>
        <span>2021년 08월 07일 21:11</span>
      </ItemInfo>
    </Container>
  );
};

PlacePostItem.propTypes = {};

export default PlacePostItem;

const ImageWrapper = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  & img {
    width: 100%;
    height: 100%;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & span {
    font-size: 1em;
  }
  & span:first-child {
    font-weight: bold;
  }
`;

const Container = styled.div`
  display: flex;
  border: 1px solid gray;
`;
