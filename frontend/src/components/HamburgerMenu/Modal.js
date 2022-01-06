import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { selectUser } from "store/User/userSlice";
import ModalPortal from "components/ModalPortal/ModalPortal";
import { ModalBackGround, ModalContainer } from "./style";

const HamburgerModal = (props) => {
  const { isOnAnimation } = props;
  const { userInfo } = useSelector(selectUser);

  return (
    <ModalPortal>
      <ModalBackGround data-kind="modal-bg" isOnAnimation={isOnAnimation}>
        <ModalContainer data-kind="modal" isOnAnimation={isOnAnimation}>
          <Wrapper>
            <NickNameDisplayWrapper>
              <NickName>{userInfo.nickname}님 안녕하세요 !</NickName>
            </NickNameDisplayWrapper>
            <ListWrapper>
              <List>
                <ListItems>
                  <Link to="/main">내가 쓴 글</Link>
                </ListItems>
                <ListItems>
                  <Link to="/main">내 정보 수정</Link>
                </ListItems>
                <ListItems>
                  <Link to="/write/1">글 작성</Link>
                </ListItems>
                <ListItems>
                  <Link to="/main">로그아웃</Link>
                </ListItems>
              </List>
            </ListWrapper>
          </Wrapper>
        </ModalContainer>
      </ModalBackGround>
    </ModalPortal>
  );
};

HamburgerModal.propTypes = {
  isOnAnimation: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default HamburgerModal;

export const Wrapper = styled.div``;

export const ListWrapper = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ListItems = styled.li`
  height: 50px;
  padding-left: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  & a {
    width: 100%;
    color: black;
    cursor: pointer;
    display: inline-block;
    height: 100%;
    line-height: 50px;
    /* dragging block */
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
`;

export const NickNameDisplayWrapper = styled.div`
  position: relative;
  min-height: 100px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const NickName = styled.span`
  display: inline-block;
  position: absolute;
  top: 100%;
  padding-bottom: 10px;
  transform: translate(0, -100%);
  font-size: 1rem;
  color: white;
`;
