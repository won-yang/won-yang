import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useModal from "hooks/useModal";
import HamburgerModal from "components/Hamburger/Modal/Modal";
import HamburgerMenuContent from "components/Hamburger/MenuContent/MenuContent";
import { Container, HamburgerSticks, SticksWrapper } from "./style";

const HamburgerMenu = (props) => {
  const [isMounted, setIsMounted] = useState(false);
  const { shouldRender } = useModal({ isMounted });

  const handleClick = (e) => {
    const { kind } = e.target.dataset;
    if (
      isMounted &&
      (kind === "modal-toggle-btn" ||
        kind === "modal-btn-sticks" ||
        kind === "modal-bg")
    ) {
      setIsMounted(false);
    } else if (
      !isMounted &&
      (kind === "modal-toggle-btn" || kind === "modal-btn-sticks")
    ) {
      setIsMounted(true);
    }
  };
  return (
    <Container onClick={handleClick}>
      <SticksWrapper data-kind='modal-toggle-btn'>
        <HamburgerSticks
          data-kind='modal-btn-sticks'
          className={shouldRender ? "open" : ""}
        ></HamburgerSticks>
      </SticksWrapper>
      {isMounted ? (
        <HamburgerModal open={shouldRender}>
          <HamburgerMenuContent />
        </HamburgerModal>
      ) : (
        ""
      )}
    </Container>
  );
};

HamburgerMenu.propTypes = {};

export default HamburgerMenu;
