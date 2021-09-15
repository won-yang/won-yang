import React, { useState, useCallback } from "react";
import { IconLogo } from "components/Icon";
import { debounce } from "lodash";

import { DropDownList } from "components/Univ/UnivSearchBar/style";
import { ReactComponent as IconSearch } from "assets/icon_search.svg";
import {
  BASE_URL,
  UNIV_API,
  NICKNAME_API,
  SIGNUP_API,
} from "utils/constants/request";
import axios from "axios";
import { useHistory } from "react-router";
import {
  SignUpHeader,
  SignUpContainer,
  SignUpForm,
  FormHeader,
  LabelContainer,
  InputContainer,
  UL,
  IsValid,
} from "./style";

const SignUpPage = () => {
  const history = useHistory();
  const [inputValue, setInputValue] = useState("");
  const [inputNickname, setInputNickname] = useState("");
  const [campusList, setCampusList] = useState([]);
  const [isMobile, setIsMobile] = useState(1000);
  const [campusId, setCampusId] = useState(-1);
  const [isValidNickname, setIsValidNickname] = useState(undefined);

  const requestInputCampus = async (input) => {
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

  const debounceInputCampus = useCallback(
    debounce((input) => {
      requestInputCampus(input);
      console.log("debounce!!");
    }, 300),
    []
  );

  const onChangeCampusInput = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
    debounceInputCampus(e.target.value);
  };

  const requestNickName = async (input) => {
    try {
      if (input !== "") {
        console.log("리퀘스트 보낸다");
        const response = await axios.get(
          `${BASE_URL}${NICKNAME_API}?nickname=${input}`,
          { withCredentials: true }
        );
        console.log(response);
        if (response.data.is_valid) {
          setIsValidNickname(true);
          console.log("사용할 수 있는 닉네임입니다.");
        } else {
          setIsValidNickname(false);

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

  const debounceInputNickname = useCallback(
    debounce((input) => {
      requestNickName(input);
      console.log("nickname!!");
      console.log(input);
    }, 1000),
    []
  );

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

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseSignup = await axios.put(
        `${BASE_URL}${SIGNUP_API}`,
        {
          campus_id: campusId,
          nickname: inputNickname,
        },
        {
          withCredentials: true,
        }
      );
      console.log(responseSignup);
      if (responseSignup) {
        history.replace(`main/${campusId}`);
      }
    } catch {
      console.log(e);
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
          <UL>
            {campusList &&
              campusList.map((item) => (
                <DropDownList
                  key={item.id}
                  onClick={(e) => onSelected(e, item.id)}
                >{`${item.name}`}</DropDownList>
              ))}
          </UL>
        </InputContainer>

        <LabelContainer htmlFor='nickname'>
          <h3 className='header'>닉네임</h3>
          <div className='univ info nickname__info'>
            2~8자 한글, 영어 소문자로만 작성해주세요.
          </div>
        </LabelContainer>
        <InputContainer>
          <input
            className='nickname signup__form'
            type='text'
            name='nickname'
            value={inputNickname}
            onChange={onChangeNicknameInput}
          />
          <IsValid isValidNickname={isValidNickname}>
            {isValidNickname !== undefined &&
              (isValidNickname
                ? "좋은 닉네임이군요!"
                : "유효하지 않은 닉네임입니다.")}
          </IsValid>
        </InputContainer>
        <button className='signup__conplete' onClick={onSubmit}>
          작성 완료
        </button>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUpPage;
