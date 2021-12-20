import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const useModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  return {
    isOpen,
    open,
    close,
  };
};

useModal.propTypes = {};

export default useModal;
