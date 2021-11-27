import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Input from "./Input";

const InputWithLabel = (props) => {
  const { type, inputMaxWidth, columnDirection, labelText, ...restParams } = props;
  return (
    <Container columnDirection={columnDirection}>
      <label>{labelText}</label>
      <Input type={type} inputMaxWidth={inputMaxWidth} {...restParams}></Input>
    </Container>
  );
};

InputWithLabel.propTypes = {};

export default InputWithLabel;

const Container = styled.div`
  ${(props) =>
    props.columnDirection &&
    css`
      display: flex;
      flex-direction: column;
    `}
`;
