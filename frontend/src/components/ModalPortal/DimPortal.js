import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ModalPortal from "./ModalPortal";

const DimPortal = ({ close, children }) => {
  const handleClickDim = (e) => {
    const { type, kind } = e.target.dataset;
    if (type === "dim") {
      close();
    }
  };
  return (
    <ModalPortal>
      <Dim data-type="dim" onClick={handleClickDim}>
        {children}
      </Dim>
    </ModalPortal>
  );
};

DimPortal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DimPortal;

const Dim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 6;
`;
