import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "styles/media";
import Badge from "components/common/Badge";

const PlacePostItem = ({ item }) => {
  return (
    <Container>
      <ImageWrapper>
        <img src={item.image_url} alt='place picture'></img>
        <Badge status={item.post_status} />
      </ImageWrapper>
      <ItemInfo>
        <h2>{item.title}</h2>
        <span>기타</span>
        <span>보증금 {item.deposit}</span>
        <span>월세 {item.monthlyRent}</span>
        <span>{item.addres}</span>
        <span>{item.createdAt}</span>
      </ItemInfo>
    </Container>
  );
};

PlacePostItem.propTypes = {};

export default PlacePostItem;

const ImageWrapper = styled.div`
  /* width: ${(props) => props.size};
  height: ${(props) => props.size}; */
  position: relative;
  flex: 1;
  width: 100%;
  height: 100%;
  & img {
    min-width: 75px;
    min-height: 75px;
    /* max-width: 400px;
    max-height: 400px; */
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
  @media ${device.tablet} {
    & img {
      /* max-width: 400px; */
      /* object-fit: fill; */
    }
  }
  @media ${device.desktop} {
  }
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  flex-direction: column;
  gap: 10px;
  margin: 10px;
  overflow: hidden;

  & span {
    font-size: 0.8rem;
    color: ${(props) => props.theme.fontGrayColor};
  }
  & span:last-child {
    color: ${(props) => props.theme.fontlightGrayColor};
    align-self: flex-end;
  }
  & h2 {
    width: 100%;
    line-height: normal;
    font-weight: bold;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1rem;
    overflow: hidden;
  }
  @media ${device.mobileS} {
    & h2 {
      max-width: 180px;
    }
  }
  @media ${device.mobileL} {
    & h2 {
      max-width: 100%;
    }
  }
`;

const Container = styled.div`
  /* width: 100%; */
  display: flex;
  border: 1px solid gray;
  font-size: ${(props) => props.theme.mobileFontSize};

  @media ${device.tablet} {
    flex-direction: column;
    font-size: ${(props) => props.theme.tabletFontSize};
  }
  @media ${device.desktop} {
    font-size: ${(props) => props.theme.desktopFontSize};
  }
`;
