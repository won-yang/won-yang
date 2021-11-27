import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ModalPortal from "components/ModalPortal/ModalPortal";
import { ModalBackGround, ModalContainer } from "./style";

const HamburgerModal = (props) => {
  const { isOnAnimation } = props;

  return (
    <ModalPortal>
      <ModalBackGround data-kind="modal-bg" isOnAnimation={isOnAnimation}>
        <ModalContainer data-kind="modal" isOnAnimation={isOnAnimation}>
          {props.children}
        </ModalContainer>
      </ModalBackGround>
    </ModalPortal>
  );
};

HamburgerModal.propTypes = {
  isOnAnimation: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default HamburgerModal;
