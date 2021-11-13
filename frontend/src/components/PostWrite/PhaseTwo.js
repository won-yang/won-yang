import React from "react";
import PropTypes from "prop-types";
import { Title, Content, InlineSubTitle, SelectButton, FlexBox } from "./Title";
import InputMoney from "./InputMoney";

const PhaseTwo = (props) => {
  return (
    <>
      <Title>보증금과 월세, 관리비, 납부금에 대한 정보를 입력해주세요.</Title>
      <Content>
        관리비는 없을 시 빈칸으로 두어도 되며, 납부금이 월세에 포함된다면 버튼을 눌러 활성화
        시켜주세요. *표시가 된 항목은 필수 입력 항목입니다.
      </Content>
      <FlexBox>
        <FlexBox>
          <InputMoney title="보증금*" />
          <InputMoney title="월세*" />
          <InputMoney title="관리비" />
        </FlexBox>
        <FlexBox>
          <div>
            <InlineSubTitle>월세에 포함</InlineSubTitle>
            <SelectButton>전기세</SelectButton>
            <SelectButton>수도세</SelectButton>
            <SelectButton>가스비</SelectButton>
          </div>
        </FlexBox>
      </FlexBox>
    </>
  );
};

PhaseTwo.propTypes = {};

export default PhaseTwo;
