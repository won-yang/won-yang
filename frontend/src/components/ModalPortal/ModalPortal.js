import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";

const ModalPortal = (props) => {
  const modalRoot = document.getElementById("modal-root");
  return ReactDom.createPortal(props.children, modalRoot);
};

ModalPortal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalPortal;
