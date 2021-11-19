import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { InlineSubTitle, StyledInputMoney, Manwon } from "./Title";

const InputMoney = ({ title, handler }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <InlineSubTitle>{title}</InlineSubTitle>
      <StyledInputMoney onChange={(e) => dispatch(handler(e.target.value))} type="text" />
      <Manwon>만원</Manwon>
    </div>
  );
};

InputMoney.propTypes = {};

export default InputMoney;
