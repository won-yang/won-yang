import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "styles/media";
import PlacePostItem from "./PostItem/PostItem";

const PlacePostList = (props) => {
  const { items, intersectRef, isLastPage } = props;

  return (
    <Wrapper>
      {items?.map((item) => (
        <PlacePostItem key={item.id} item={item} />
      ))}
      {items.length === 0 && <span>non data</span>}
      {!isLastPage ? <div ref={intersectRef}>...loading</div> : <div>Last</div>}
    </Wrapper>
  );
};

PlacePostList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default PlacePostList;

const Wrapper = styled.section`
  display: grid;
  justify-content: center;
  max-width: 1080px;
  margin: 0 auto;
  grid-template-columns: repeat(1, 90%);
  gap: 20px;
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 300px);
    justify-self: center;
    align-self: center;
  }
  @media ${device.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
