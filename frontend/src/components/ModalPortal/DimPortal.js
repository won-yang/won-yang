import React from "react";
import PropTypes from "prop-types";
import ModalPortal from "./ModalPortal";
import styled from "styled-components";

const DimPortal = (props) => {
  const handleClickDim = (e) => {
    const { type } = e.target.dataset;
    
  };
  return (
    <ModalPortal>
      <Dim data-type="dim" onClick={handleClickDim}>
        {props.children}
      </Dim>
    </ModalPortal>
  );
};

DimPortal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DimPortal;

const Dim = styled.div``;
