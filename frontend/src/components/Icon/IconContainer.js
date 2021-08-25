import React from "react";
import PropTypes from "prop-types";
import { Container } from "./style";

const IconContainer = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

IconContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IconContainer;
