import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import DimPortal from "components/ModalPortal/DimPortal";
import { selectUser } from "store/User/userSlice";

const SideModal = (props) => {
  const { close } = props;
  const { userInfo } = useSelector(selectUser);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    return () => {
      close();
    };
  }, [location]);
  return (
    <DimPortal {...{ close }}>
      <Container>
        <NickNameDisplayWrapper>
          <NickName>{userInfo?.nickname}님 안녕하세요 !</NickName>
        </NickNameDisplayWrapper>
        <ListWrapper>
          <List>
            <ListItems>
              <StyledLink to="/main">내가 쓴 글</StyledLink>
            </ListItems>
            <ListItems>
              <StyledLink to="/main">내 정보 수정</StyledLink>
            </ListItems>
            <ListItems>
              <StyledLink to="/write/1">글 작성</StyledLink>
            </ListItems>
            <ListItems>
              <StyledLink to="/main">로그아웃</StyledLink>
            </ListItems>
          </List>
        </ListWrapper>
      </Container>
    </DimPortal>
  );
};

SideModal.propTypes = {
  isOnAnimation: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default SideModal;

export const Container = styled.div`
  position: absolute;
  background-color: white;
  max-width: 450px;
  width: 100%;
  right: 0px;
  height: 100%;
`;

export const ListWrapper = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ListItems = styled.li`
  height: 50px;
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

const StyledLink = styled(Link)`
  padding-left: 20px;
`;
