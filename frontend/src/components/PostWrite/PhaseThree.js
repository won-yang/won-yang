import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPostWrite,
  setContractExpireDate,
  setMoveInDate,
} from "store/Postwrite/PostwriteSlice";
import DatePicker from "react-date-picker";
import datemaker from "utils/datemaker";
import { Title, Content, FlexBox, ContentBody, InlineSubTitle, StyledInputDate } from "./common";
import PrevNext from "./common/PrevNext";

const PhaseThree = (props) => {
  const dispatch = useDispatch();
  const state = useSelector(selectPostWrite);
  const { contract_expire_date, move_in_date } = state;

  const handleChangeExpiredDate = (value) => {
    if (!value) {
      value = new Date();
    }
    dispatch(setContractExpireDate(datemaker(value)));
  };

  const handleChangeMoveInDate = (value) => {
    if (!value) {
      value = new Date();
    }
    dispatch(setMoveInDate(datemaker(value)));
  };

  return (
    <>
      <ContentBody>
        <Title>계약이 만료되는 날짜와 입주가능한 날짜를 선택해주세요. </Title>
        <Content>
          만료되는 날짜를 정확히 모른다면, 대략적인 날짜로 해주세요. *표시가 된 항목은 필수 입력
          항목입니다.
        </Content>
        <FlexBox>
          <ContentBody>
            <InlineSubTitle>계약 만료일*</InlineSubTitle>
            <DatePicker
              format="yyyy-MM-dd"
              minDate={new Date()}
              value={new Date(contract_expire_date)}
              onChange={(selected) => handleChangeExpiredDate(selected)}
            />
          </ContentBody>
          <ContentBody>
            <InlineSubTitle>입주 가능일*</InlineSubTitle>
            <DatePicker
              format="yyyy-MM-dd"
              minDate={new Date()}
              value={new Date(move_in_date)}
              onChange={(selected) => handleChangeMoveInDate(selected)}
            />
          </ContentBody>
        </FlexBox>
        <PrevNext />
      </ContentBody>
    </>
  );
};

PhaseThree.propTypes = {};

export default PhaseThree;
