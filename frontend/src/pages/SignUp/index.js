import React, { useState, useCallback } from "react";
import { IconLogo } from "components/Icon";
import { debounce } from "lodash";
import { DEBOUNCE_TIME } from "utils/constants/numbers";
import { ReactComponent as IconSearch } from "assets/icon_search.svg";
import {
  BASE_URL,
  UNIV_API,
  NICKNAME_API,
  SIGNUP_API,
} from "utils/constants/request";
import axios from "axios";
import { useHistory } from "react-router";
import DropDown from "components/Univ/UnivSearchBar/DropDown";
import CheckValidNickname from "./CheckValidNickname";
import {
  SignUpHeader,
  SignUpContainer,
  SignUpForm,
  FormHeader,
  LabelContainer,
  InputContainer,
  DropDownUL,
  IsValid,
} from "./style";

const SignUpPage = () => {
  const history = useHistory();
  const [inputValue, setInputValue] = useState("");
  const [inputNickname, setInputNickname] = useState("");
  const [campusList, setCampusList] = useState([]);
  const [campusId, setCampusId] = useState(-1);
  const [isValidNickname, setIsValidNickname] = useState(undefined);

  const requestInputCampus = async (input) => {
    try {
      if (input !== "") {
        const response = await axios.get(
          `${BASE_URL}${UNIV_API}?name=${input}`
        );
        setCampusList(response.data.list);
      } else {
        setCampusList("");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const debounceInputCampus = useCallback(
    debounce((input) => {
      requestInputCampus(input);
    }, DEBOUNCE_TIME),
    []
  );

  const onChangeCampusInput = (e) => {
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
        if (response.data.is_valid) {
          setIsValidNickname(true);
        } else {
          setIsValidNickname(false);
        }
      } else {
        setInputNickname("");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const debounceInputNickname = useCallback(
    debounce((input) => {
      requestNickName(input);
    }, DEBOUNCE_TIME),
    []
  );

  const onChangeNicknameInput = (e) => {
    const inputNicknameValue = e.target.value;

    if (inputNicknameValue === "") {
      setInputNickname(undefined);
    } else {
      setInputNickname(inputNicknameValue);
      debounceInputNickname(inputNicknameValue);
    }
  };

  const onSelected = (e, id) => {
    setInputValue(e.target.innerText);
    setCampusId(id);
    setCampusList([]);
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
      if (responseSignup) {
        history.replace(`main/${campusId}`);
      }
    } catch {
      console.error(e);
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
          <DropDownUL>
            <DropDown campusList={campusList} onSelected={onSelected} />
          </DropDownUL>
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
          <CheckValidNickname isValidNickname={isValidNickname} />
        </InputContainer>
        <button className='signup__conplete' onClick={onSubmit}>
          작성 완료
        </button>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUpPage;
