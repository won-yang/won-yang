import React from "react";
import styled from "styled-components";

const Input = ({ ...restParams }) => {
  return <StyledInput {...restParams}></StyledInput>;
};

const StyledInput = styled.input`
  padding: 5px;
  max-width: ${(props) => props.inputMaxWidth};
`;

export default Input;
