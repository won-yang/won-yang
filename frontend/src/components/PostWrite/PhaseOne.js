import React from "react";
import PropTypes from "prop-types";
import { setContact, setTitle } from "store/Postwrite/PostwriteSlice";
import { useDispatch } from "react-redux";
import { Title, Content, SubTitle, StyledInput, FlexBox } from "./Title";

const PhaseOne = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <Title>제목과 연락처를 입력해주세요.</Title>
      <Content>
        글을 대략적으로 알릴 제목과, 사용자가 연락을 취할 오픈 카카오톡 링크나 전화번호를
        입력해주세요. *표시가 된 항목은 필수 입력 항목입니다.
      </Content>
      <FlexBox>
        <div>
          <SubTitle>제목*</SubTitle>
          <StyledInput
            onChange={(e) => dispatch(setTitle(e.target.value))}
            type="text"
            placeholder="제목을 입력해주세요."
          />
          <SubTitle>연락처*</SubTitle>
          <StyledInput
            onChange={(e) => dispatch(setContact(e.target.value))}
            type="text"
            placeholder="연락처를 입력해주세요."
          />
        </div>
      </FlexBox>
    </>
  );
};

PhaseOne.propTypes = {};

export default PhaseOne;
