import React from "react";
import styled from "styled-components";

const Button = ({ ...restParams }) => {
  return <StyledButton {...restParams}></StyledButton>;
};

Button.propTypes = {};

const StyledButton = styled.button`
  cursor: pointer;
`;

export default Button;
