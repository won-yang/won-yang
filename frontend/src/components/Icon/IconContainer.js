import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const IconContainer = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

IconContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IconContainer;

const Container = styled.div`
  width: ${(props) => props.widthSize};
  height: ${(props) => props.heightSize};
  svg {
    width: 100%;
    height: 100%;
  }
`;
