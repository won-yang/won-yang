import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { device } from "styles/media";
import Button from "components/common/Button";
import PlacePostItem from "./PostItem/PostItem";

const PlacePostList = (props) => {
  const { items, intersectRef, isLastPage, loadMorePostItem } = props;

  return (
    <Wrapper>
      {items?.map((item) => (
        <PlacePostItem key={item.id} item={item} />
      ))}
      <div ref={intersectRef}>
        {isLastPage ? (
          ""
        ) : (
          <LoadMorePostButton onClick={loadMorePostItem}>더보기</LoadMorePostButton>
        )}
      </div>
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

const LoadMorePostButton = styled(Button)`
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.middleFontSize};
`;
