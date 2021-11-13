import React from "react";
import PropTypes from "prop-types";
import { InlineSubTitle, StyledInputMoney, Manwon } from "./Title";

const InputMoney = (props) => {
  return (
    <div>
      <InlineSubTitle>{props.title}</InlineSubTitle>
      <StyledInputMoney type='text' />
      <Manwon>만원</Manwon>
    </div>
  );
};

InputMoney.propTypes = {};

export default InputMoney;
