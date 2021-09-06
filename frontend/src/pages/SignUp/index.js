import React from "react";
import { IconLogo } from "components/Icon";
import { ReactComponent as IconSearch } from "assets/icon_search.svg";
import { SignUpHeader, SignUpContainer, SignUpForm } from "./style";

const SignUpPage = () => {
  return (
    <SignUpContainer>
      <SignUpHeader>
        <IconLogo widthSize='100px' heightSize='100px' />
      </SignUpHeader>
      <SignUpForm>
        <h2 className='header'>정보를 알려주세요</h2>
        <label className='univ univ__label' htmlFor='university'>
          소속 대학교
          <span className='univ info univ__info'>
            검색 버튼을 눌러 대학교를 입력해주세요
          </span>
        </label>
        <div>
          <input
            className='univ signup__form'
            type='text'
            name='university'
          ></input>
          <button className='search__univ'>icon</button>
        </div>

        <label className='univ nickname__label' htmlFor='nickname'>
          닉네임
          <span className='univ info nickname__info'>
            2~8자 한글, 영어로만 작성해주세요.
          </span>
        </label>
        <div>
          <input className='signup__form' type='text' name='nickname'></input>
        </div>
        <button className='signup__conplete'>작성 완료</button>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUpPage;
