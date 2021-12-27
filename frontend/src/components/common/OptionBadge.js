import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const OptionBadge = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

OptionBadge.propTypes = {};

export default OptionBadge;

const Wrapper = styled.div`
  border-radius: 8px;
  color: white;
  padding: 5px;
  white-space: wrap;
  width: max-content;
  flex-wrap: wrap;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;
