import React from "react";
import PropTypes from "prop-types";
import {
  Title,
  Content,
  FlexBox,
  InlineSubTitle,
  StyledInputDate,
} from "./Title";

const PhaseThree = (props) => {
  return (
    <>
      <Title>계약이 만료되는 날짜와 입주가능한 날짜를 선택해주세요. </Title>
      <Content>
        만료되는 날짜를 정확히 모른다면, 대략적인 날짜로 해주세요. *표시가 된
        항목은 필수 입력 항목입니다.
      </Content>
      <FlexBox>
        <div>
          <InlineSubTitle>계약 만료일*</InlineSubTitle>
          <StyledInputDate type='date' />
        </div>
        <div>
          <InlineSubTitle>입주 가능일*</InlineSubTitle>
          <StyledInputDate type='date' />
        </div>
      </FlexBox>
    </>
  );
};

PhaseThree.propTypes = {};

export default PhaseThree;
