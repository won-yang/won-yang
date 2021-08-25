import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const OnOffButton = (props) => {
  return (
    <>
      <Input type='checkbox' id='checkbox'></Input>
      <Label htmlFor='checkbox'>
        <span></span>
      </Label>
    </>
  );
};

OnOffButton.propTypes = {};

export default OnOffButton;

const Input = styled.input`
  width: 0px;
  visibility: hidden;
  transition: 0.2s;
  /* width: 60px; */
  &:checked + label {
    background-color: #00c73c;
  }
  &:checked + label span {
    transform: translateX(26px);
  }
`;

const Label = styled.label`
  /* position: absolute; */
  top: 10px;
  width: 50px;
  height: 24px;
  border-radius: 20px;
  background-color: #ddd;
  transition: 0.2s;
  cursor: pointer;
  & span {
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #fff;
    transition: 0.2s;
  }
  &::before,
  &::after {
    position: absolute;
    font-size: 11px;
    font-weight: bold;
    padding-top: 2px;
    width: 20px;
    line-height: 22px;
    color: #fff;
    text-align: center;
  }
  &::before {
    content: "ON";
  }
  &::after {
    content: "OFF";
    right: 4px;
  }
`;
