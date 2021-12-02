import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const OptionBadge = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

OptionBadge.propTypes = {};

export default OptionBadge;

const Wrapper = styled.span`
  border-radius: 8px;
  color: white;
  padding: 5px;
  white-space: nowrap;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;
