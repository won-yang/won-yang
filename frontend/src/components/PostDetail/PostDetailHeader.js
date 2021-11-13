import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const PostDetailHeader = (props) => {
  return (
    <Container>
      <PostTitle>농담대까지 10분 거리 원룸 양도합니다</PostTitle>
      <PostDate>작성일자 : 2021. 06.21 13:00</PostDate>
      <UserInteractionButtonContainer>
        <PostBookmark>북</PostBookmark>
        <PostShare>공</PostShare>
      </UserInteractionButtonContainer>
    </Container>
  );
};

PostDetailHeader.propTypes = {};

export default PostDetailHeader;

const Container = styled.header`
  position: relative;
`;
const PostTitle = styled.span`
  font-size: 1.5em;
  font-weight: bold;
  display: block;
`;
const PostDate = styled.span`
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.gray};
`;

const UserInteractionButtonContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 5px;
`;

const PostBookmark = styled.button``;

const PostShare = styled.button``;
