import React from "react";
import { IconLogo } from "components/Icon";
import { ReactComponent as IconSearch } from "assets/icon_search.svg";
import {
  SignUpHeader,
  SignUpContainer,
  SignUpForm,
  FormHeader,
  LabelContainer,
  InputContainer,
} from "./style";

const SignUpPage = () => {
  return (
    <SignUpContainer>
      <SignUpHeader>
        <IconLogo widthSize='12em' heightSize='12em' />
      </SignUpHeader>
      <SignUpForm>
        <FormHeader>정보를 알려주세요</FormHeader>
        <LabelContainer htmlFor='university'>
          <h3 className='header'>소속 대학교</h3>
          <div className='univ info univ__info'>
            검색 버튼을 눌러 대학교를 입력해주세요
          </div>
        </LabelContainer>
        <InputContainer>
          <input
            className='univ__search signup__form'
            type='text'
            name='university'
          ></input>
          <button className='search__univ'>
            <IconSearch width='35px' height='35px' />
          </button>
        </InputContainer>

        <LabelContainer htmlFor='nickname'>
          <h3 className='header'>닉네임</h3>
          <div className='univ info nickname__info'>
            2~8자 한글, 영어로만 작성해주세요.
          </div>
        </LabelContainer>
        <InputContainer>
          <input
            className='nickname signup__form'
            type='text'
            name='nickname'
          ></input>
        </InputContainer>
        <button className='signup__conplete'>작성 완료</button>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUpPage;
