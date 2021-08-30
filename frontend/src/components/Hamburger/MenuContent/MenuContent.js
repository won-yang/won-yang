import React from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  ListWrapper,
  List,
  ListItems,
  NickNameDisplayWrapper,
  NickName,
} from "./style";

const HamburgerMenuContent = (props) => {
  return (
    <Wrapper>
      <NickNameDisplayWrapper>
        <NickName>닉네임</NickName>
      </NickNameDisplayWrapper>
      <ListWrapper>
        <List>
          <ListItems>
            <a>내가 쓴 글</a>
          </ListItems>
          <ListItems>
            <a>내 정보 수정</a>
          </ListItems>
          <ListItems>
            <a>글 작성</a>
          </ListItems>
          <ListItems>
            <a>로그아웃</a>
          </ListItems>
        </List>
      </ListWrapper>
    </Wrapper>
  );
};

HamburgerMenuContent.propTypes = {};

export default HamburgerMenuContent;
