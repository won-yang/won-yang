import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { IconLogo } from "components/Icon";
import { selectUniversity } from "store/University/UniversitySlice";
import useModal from "hooks/useModal";
import SideModal from "components/Modal/SideModal";
import { selectUser } from "store/User/userSlice";

const Header = (props) => {
  const { userInfo } = useSelector(selectUser);
  const { isOpen, open, close } = useModal();

  return (
    <Wrapper id="header">
      <CenterAlignWrapper>
        <Container>
          <IconLogo widthSize="65px" heightSize="100%"></IconLogo>
          <UnivTitle>
            <StyledLink to={userInfo ? `/main/${userInfo?.campus_id}` : "/"}>
              {userInfo?.campus_name ?? "원양"}
            </StyledLink>
          </UnivTitle>
          <HamburgerMenu onClick={() => (isOpen ? close() : open())}>
            <HamburgerSticks className={isOpen && "open"} />
          </HamburgerMenu>
        </Container>
      </CenterAlignWrapper>
      {isOpen && <SideModal {...{ close }} />}
    </Wrapper>
  );
};

Header.propTypes = {};

export default Header;

const UnivTitle = styled.div`
  color: white;
`;
const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  box-shadow: 0px 2px 6px 0px black;
  height: 50px;
  position: fixed;
  z-index: 7;
  font-size: 1rem;
`;
const CenterAlignWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  height: 50px;
`;

const HamburgerMenu = styled.div`
  width: 65px;
  height: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
const HamburgerSticks = styled.div`
  position: relative;
  top: 50%;
  transform: translate(0%, -50%);
  width: 50%;
  height: 3px;
  background-color: white;
  transition: ease-in 0.3s;
  &.open {
    background-color: black;
    transform: rotate3d(0, 0, 1, 45deg);
    &::before {
      content: "";
      background-color: black;
      top: 0;
      transition: 0.6s;
      transform: rotate3d(0, 0, 1, 90deg);
    }
  }
  &.open::after {
    content: "";
    display: none;
  }
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 3px;
    background-color: white;
    top: -10px;
  }
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 3px;
    background-color: white;
    top: 10px;
  }
`;
const StyledLink = styled(Link)`
  color: white;
`;
