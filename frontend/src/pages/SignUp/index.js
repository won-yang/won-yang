import React, { useState } from "react";
import { IconLogo } from "components/Icon";
import { debounce } from "lodash";

import { DropDownList } from "components/Univ/UnivSearchBar/style";
import { ReactComponent as IconSearch } from "assets/icon_search.svg";
import UnivSearchbar from "components/Univ/UnivSearchBar";
import {
  BASE_URL,
  UNIV_API,
  NICKNAME_API,
  SIGNUP_API,
} from "utils/constants/request";
import axios from "axios";
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
  const [campusId, setCampusId] = useState(-1);

  const request = async (input) => {
    try {
      if (input !== "") {
        console.log("리퀘스트 보낸다");
        const response = await axios.get(
          `${BASE_URL}${UNIV_API}?name=${input}`
        );
        console.log(response.data.list);
        setCampusList(response.data.list);
        console.log(input);
      } else {
        console.log("아무것도 입력되지 않았다");
        setCampusList("");
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
        console.log("it is cookie", cookie);
        const response = await axios.get(
          `${BASE_URL}${NICKNAME_API}?nickname=${input}`,
          { withCredentials: true }
        );
        console.log(response);
        if (response.is_valid) {
          console.log("사용할 수 있는 닉네임입니다.");
        } else {
          console.log("사용할 수 없는 닉네임입니다.");
        }
        console.log(input);
      } else {
        console.log("아무것도 입력되지 않았다");
        setInputNickname("");
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

  const onSelected = (e, id) => {
    console.log(e.target.innerText);
    setInputValue(e.target.innerText);
    setCampusId(id);
    setCampusList([]);
    console.log(id, " === ", campusId);
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

  const onSubmit = async (e, input) => {
    e.preventDefault();
    const responseSignup = await axios.put(
      `${BASE_URL}${SIGNUP_API}?name=${input}`,
      { withCredentials: true }
    );
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
                  onClick={(e) => onSelected(e, item.id)}
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
        <button className='signup__conplete' onClick={onSubmit}>
          작성 완료
        </button>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUpPage;
