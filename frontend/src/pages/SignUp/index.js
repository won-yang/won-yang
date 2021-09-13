import React, { useState } from "react";
import { IconLogo } from "components/Icon";
import { debounce } from "lodash";

import { DropDownList } from "components/Univ/UnivSearchBar/style";
import { ReactComponent as IconSearch } from "assets/icon_search.svg";
import { BASE_URL, UNIV_API, NICKNAME_API } from "utils/constants/request";
import {
  SignUpHeader,
  SignUpContainer,
  SignUpForm,
  FormHeader,
  LabelContainer,
  InputContainer,
} from "./style";

const SignUpPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputNickname, setInputNickname] = useState("");
  const [campusList, setCampusList] = useState([]);
  const [isMobile, setIsMobile] = useState(1000);

  const request = async (input) => {
    try {
      if (input !== "") {
        console.log("리퀘스트 보낸다");
        const response = await fetch(`${BASE_URL}${UNIV_API}?name=${input}`);
        console.log(response);
        const data = await response.json();
        setInputNickname(data.list);
        console.log(input);
      } else {
        console.log("아무것도 입력되지 않았다");
        setInputNickname("");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const debounceInputCampus = debounce((input) => {
    request(input);
    console.log("debounce!!");
  }, 300);

  const onChangeCampusInput = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
    debounceInputCampus(e.target.value);
  };

  const requestNickName = async (input) => {
    try {
      if (input !== "") {
        console.log("리퀘스트 보낸다");
        const response = await fetch(
          `${BASE_URL}${NICKNAME_API}?nickname=${input}`
        );
        console.log(response);
        const data = await response.json();
        setCampusList(data.list);
        console.log(input);
      } else {
        console.log("아무것도 입력되지 않았다");
        setCampusList([]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const debounceInputNickname = debounce((input) => {
    requestNickName(input);
    console.log("nickname!!");
    console.log(input);
  }, 1000);

  const onChangeNicknameInput = (e) => {
    setInputNickname(e.target.value);
    debounceInputNickname(e.target.value);
  };

  const onSelected = (e) => {
    console.log("이걸 인풋창에 올린다.");
    console.log("campuslist를 비운다. setCampusList([])");
  };

  const onClickHandler = (e) => {
    console.log(e);
    console.log(window.innerWidth);
    if (inputValue === "") {
      console.log("입력을 해");
    } else {
      debounceInputCampus(inputValue);
    }
    if (window.innerWidth < 700) {
      setIsMobile(window.innerWidth);
    } else {
      setIsMobile(window.innerWidth);
    }
  };

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
            value={inputValue}
            onChange={onChangeCampusInput}
          ></input>
          <button className='search__univ'>
            <IconSearch width='35px' height='35px' />
          </button>
          <ul style={{ position: "absolute" }}>
            {campusList &&
              campusList.map((item) => (
                <DropDownList
                  key={item.id}
                  onClick={onSelected}
                >{`${item.name}`}</DropDownList>
              ))}
          </ul>
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
            value={inputNickname}
            onChange={onChangeNicknameInput}
          ></input>
        </InputContainer>
        <button className='signup__conplete'>작성 완료</button>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUpPage;
