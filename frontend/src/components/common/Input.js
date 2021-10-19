import React from "react";
import styled from "styled-components";

const Input = ({ ...restParams }) => {
  return <StyledInput {...restParams}></StyledInput>;
};

const StyledInput = styled.input`
  padding: 5px;
`;

export default Input;
