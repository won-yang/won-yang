import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const PostDetailHeader = (props) => {
  const { title, created_date } = props;
  return (
    <Container>
      <PostTitle>{title}</PostTitle>
      <PostDate>{created_date ? `작성일자: ${created_date}` : ""}</PostDate>
      <UserInteractionButtonContainer>
        <PostBookmark>북</PostBookmark>
        <PostShare>공</PostShare>
      </UserInteractionButtonContainer>
    </Container>
  );
};

PostDetailHeader.propTypes = {
  title: PropTypes.string,
  created_date: PropTypes.string,
};

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
