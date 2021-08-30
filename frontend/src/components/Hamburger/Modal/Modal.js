import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ModalPortal from "components/ModalPortal/ModalPortal";
import { ModalBackGround, ModalContainer } from "./style";

const HamburgerModal = (props) => {
  const { open } = props;
  return (
    <ModalPortal>
      <ModalBackGround data-kind='modal-bg'>
        <ModalContainer
          data-kind='modal'
          className={open ? "modal-open" : "modal-close"}
        >
          {props.children}
        </ModalContainer>
      </ModalBackGround>
    </ModalPortal>
  );
};

HamburgerModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default HamburgerModal;
