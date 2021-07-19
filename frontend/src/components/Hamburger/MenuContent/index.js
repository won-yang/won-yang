import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  ListWrapper,
  List,
  ListItems,
  NickNameDisplayWrapper,
} from './style';

const HamburgerMenuContent = (props) => {
  return (
    <Wrapper>
      <NickNameDisplayWrapper>닉네임</NickNameDisplayWrapper>
      <ListWrapper>
        <List>
          <ListItems>내가 쓴 글</ListItems>
          <ListItems>내 정보 수정</ListItems>
          <ListItems>글 작성</ListItems>
          <ListItems>로그아웃</ListItems>
        </List>
      </ListWrapper>
    </Wrapper>
  );
};

HamburgerMenuContent.propTypes = {};

export default HamburgerMenuContent;
