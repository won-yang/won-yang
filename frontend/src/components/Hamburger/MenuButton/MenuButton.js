import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useModal from "hooks/useModal";
import HamburgerModal from "components/Hamburger/Modal/Modal";
import HamburgerMenuContent from "components/Hamburger/MenuContent/MenuContent";
import styled from "styled-components";
import useAnimation from "hooks/useAnimation";

const HamburgerMenu = (props) => {
  const { isMounted, setIsMounted, offAnimation, animation } = useAnimation({ delay: 600 });
  const handleClick = (e) => {
    const { kind } = e.target.dataset;
    if (
      isMounted &&
      (kind === "modal-toggle-btn" || kind === "modal-btn-sticks" || kind === "modal-bg")
    ) {
      offAnimation();
    } else if (!isMounted && (kind === "modal-toggle-btn" || kind === "modal-btn-sticks")) {
      setIsMounted(true);
    }
  };
  return (
    <Container onClick={handleClick}>
      <SticksWrapper data-kind="modal-toggle-btn">
        <HamburgerSticks
          data-kind="modal-btn-sticks"
          className={animation && "open"}
        ></HamburgerSticks>
      </SticksWrapper>
      {isMounted && (
        <HamburgerModal isOnAnimation={animation}>
          <HamburgerMenuContent />
        </HamburgerModal>
      )}
    </Container>
  );
};

HamburgerMenu.propTypes = {};

export default HamburgerMenu;

export const SticksWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const HamburgerSticks = styled.div`
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

export const Container = styled.div`
  width: 65px;
  height: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  /* &:hover ${HamburgerSticks}:before {
    background-color: black;
  }
  &:hover ${HamburgerSticks} {
    background-color: black;
  }
  &:hover ${HamburgerSticks}:after {
    background-color: black;
  } */
`;
