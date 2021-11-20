import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "components/common/Button";
import Input from "components/common/Input";
import { device } from "styles/media";

export const Title = styled.h1`
  font-size: 25px;
  margin-bottom: 25px;
  @media ${device.tablet} {
    font-size: 45px;
    margin-bottom: 25px;
  }
`;

export const Content = styled.p`
  font-size: 15px;
  margin-bottom: 25px;
  @media ${device.tablet} {
    font-size: 25px;
    margin-bottom: 25px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 15px;
  margin-bottom: 25px;
  @media ${device.tablet} {
    font-size: 25px;
    margin-bottom: 25px;
  }
`;

export const InlineSubTitle = styled.h3`
  font-size: 0.9em;
  display: inline-block;
  width: 30%;
  text-align: right;
  margin-right: 8px;
  @media ${device.tablet} {
    font-size: 1.3em;
    height: 50px;
    width: 40%;
    text-align: right;
    margin-right: 30px;
  }
`;

export const SelectButton = styled(Button)`
  border: 1px solid #aaaaaa;
  background-color: white;
  font-size: 0.7rem;
  height: 30px;
  margin-left: 3px;
  width: 4em;
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};

  @media ${device.tablet} {
    font-size: 1.3em;
    height: 50px;
    width: 120px;
    border: 1px solid ${(props) => props.color};
    color: ${(props) => props.color};
  }
`;

export const PrevNextBtn = styled(Button)`
  background-color: #4593ef;
  color: #ffffff;
  font-size: 15px;
  width: 100px;
  height: 40px;
  margin-left: 5px;
  border: none;
  border-radius: 5px;
  @media ${device.tablet} {
    background-color: #4593ef;
    color: #ffffff;
    font-size: 25px;
    width: 170px;
    height: 60px;
    margin-left: 5px;
    border: none;
    border-radius: 5px;
  }
`;

export const FlexBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledInputMoney = styled(Input)`
  width: 100px;
  height: 30px;
  margin-bottom: 25px;
  box-sizing: border-box;
  @media ${device.tablet} {
    font-size: 1.3em;
    height: 50px;
    width: 150px;
  }
`;

export const StyledInputDate = styled(Input)`
  width: 65%;
  height: 25px;
  margin-bottom: 25px;
  box-sizing: border-box;
  color: #0024a4;
  font-size: 15px;
  @media ${device.tablet} {
    width: 300px;
    height: 50px;
    margin-bottom: 25px;
    box-sizing: border-box;
    color: #0024a4;
    font-size: 25px;
  }
`;

export const StyledInput = styled(Input)`
  width: 90%;
  height: 25px;
  margin-bottom: 25px;
  font-size: 15px;
  @media ${device.tablet} {
    width: 95%;
    height: 50px;
    margin-bottom: 25px;
    font-size: 25px;
  }
`;

export const Manwon = styled.span`
  font-size: 0.8em;
  margin-left: 10px;
  @media ${device.tablet} {
    font-size: 1.3em;
    height: 50px;
    width: 150px;
  }
`;

export const ContentBody = styled.div`
  width: 100%;
`;
