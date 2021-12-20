import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "styles/media";
import Badge from "components/common/Badge";
import { useHistory } from "react-router-dom";

const PlacePostItem = ({ item }) => {
  const history = useHistory();
  const handleClickPost = (e) => {
    console.log("click post", item);
    history.push(`${item.id}`);
  };
  return (
    <Container onClick={handleClickPost}>
      <ImageWrapper>
        <img src={item.image_url} alt="place picture"></img>
        <Badge status={item.post_status} />
      </ImageWrapper>
      <ItemInfo>
        <h2>{item.title}</h2>
        <span>기타</span>
        <span>보증금 {item.deposit}</span>
        <span>월세 {item.monthly_rent}</span>
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
  overflow: hidden;
  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-width: 75px;
    min-height: 150px;
    max-height: 150px;
    height: auto;
    object-fit: fill;
  }
  @media ${device.tablet} {
    & {
      width: 100%;
      min-height: 200px;
    }
    & img {
      width: 100%;
      height: auto;
      max-height: 225px;
      object-fit: fill;
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
    color: ${(props) => props.theme.colors.gray};
  }
  & span:last-child {
    color: ${(props) => props.theme.colors.lightGray};
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
  font-size: ${(props) => props.theme.fontSize.mobileFontSize};

  @media ${device.tablet} {
    flex-direction: column;
    font-size: ${(props) => props.theme.fontSize.tabletFontSize};
  }
  @media ${device.desktop} {
    font-size: ${(props) => props.theme.fontSize.desktopFontSize};
  }
`;
