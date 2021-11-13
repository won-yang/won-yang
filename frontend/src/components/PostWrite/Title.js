import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "components/common/Button";
import Input from "components/common/Input";

export const Title = styled.h1`
  font-size: 45px;
  margin-bottom: 25px;
`;

export const Content = styled.p`
  font-size: 20px;
  margin-bottom: 25px;
`;

export const SubTitle = styled.h3`
  font-size: 25px;
  margin-bottom: 25px;
`;

export const InlineSubTitle = styled.h3`
  font-size: 25px;
  display: inline-block;
  width: 220px;
  text-align: center;
`;

export const SelectButton = styled(Button)`
  border: 1px solid #aaaaaa;
  background-color: white;
  font-size: 25px;
  height: 50px;
  margin-left: 5px;
  width: 100px;
`;

export const PrevNextBtn = styled(Button)`
  background-color: #4593ef;
  color: #ffffff;
  font-size: 25px;
  width: 170px;
  height: 60px;
  margin-left: 5px;
  border: none;
  border-radius: 5px;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledInputMoney = styled(Input)`
  width: 165px;
  height: 50px;
  margin-bottom: 25px;
  box-sizing: border-box;
`;

export const StyledInputDate = styled(Input)`
  width: 300px;
  height: 50px;
  margin-bottom: 25px;
  box-sizing: border-box;
  color: #0024a4;
  font-size: 25px;
`;

export const StyledInput = styled(Input)`
  width: 850px;
  height: 50px;
  margin-bottom: 25px;
  font-size: 25px;
`;

export const Manwon = styled.span`
  font-size: 25px;
  margin-left: 20px;
`;
