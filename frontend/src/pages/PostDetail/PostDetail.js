import React from "react";
import PropTypes from "prop-types";
import MainTemplate from "components/Template/MainTemplate";
import styled from "styled-components";
import { ReactComponent as AuthIcon } from "assets/medal.svg";
import Carousel from "components/common/Carousel";

const PostDetailPage = (props) => {
  return (
    <PostDetailTemplate>
      <Carousel />
      <PostDetailContainer>
        <AuthBadgeWrapper>
          <AuthIcon />
          <AuthText>인증완료사용자</AuthText>
        </AuthBadgeWrapper>
        <PostTitle>Title</PostTitle>
        <div>
          <span>작성일자 : 2021. 06.21 13:00</span>
          <div>북마크, 공유버튼</div>
        </div>
        <ul>
          <li>보증금</li>
          <li>월세</li>
          <li>관리비</li>
        </ul>
        <div>
          <p>게시글 컨텐츠</p>
        </div>
        <div>연락처</div>
        <div>주소</div>
        <div>테이블: 계약만료일, 등</div>
        <div>
          옵션
          <div>뱃지:인터넷 등</div>
        </div>
      </PostDetailContainer>
    </PostDetailTemplate>
  );
};

PostDetailPage.propTypes = {};

export default PostDetailPage;

const PostDetailTemplate = styled(MainTemplate)``;

const PostTitle = styled.span``;

const AuthBadgeWrapper = styled.div`
  & > svg {
    width: 25px;
    height: 25px;
  }
`;

const AuthText = styled.span`
  display: inline;
  height: 25px;
  font-size: 20px;
  font-weight: bold;
`;

const PostDetailContainer = styled.section`
  padding: 20px;
`;
