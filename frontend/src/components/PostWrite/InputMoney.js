import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { InlineSubTitle, StyledInputMoney, Manwon } from "./Title";

const InputMoney = ({ title, handler }) => {
  const dispatch = useDispatch();

  return (
    <InputMoneyBox>
      <InlineSubTitle>{title}</InlineSubTitle>
      <StyledInputMoney onChange={(e) => dispatch(handler(e.target.value))} type="text" />
      <Manwon>만원</Manwon>
    </InputMoneyBox>
  );
};

InputMoney.propTypes = {};

const InputMoneyBox = styled.div`
  width: 100%;
`;

export default InputMoney;
