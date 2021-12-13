import React, { useState } from "react";
import { IconLogo } from "components/Icon";
import { getCampusList, getNickName, putSignup } from "utils/api";
import useDebounce from "hooks/useDebounce";
import { ReactComponent as IconSearch } from "assets/icon_search.svg";
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
} from "./style";

const SignUpPage = () => {
  const history = useHistory();
  const [inputValue, setInputValue] = useState("");
  const [inputNickname, setInputNickname] = useState("");
  const [campusList, setCampusList] = useState([]);
  const [campusId, setCampusId] = useState(-1);
  const [isValidNickname, setIsValidNickname] = useState(undefined);

  const requestInputCampus = useDebounce(async (input) => {
    try {
      if (input !== "") {
        const response = await getCampusList(input);
        setCampusList(response.list);
      } else {
        setCampusList("");
      }
    } catch (err) {
      console.error(err);
    }
  });

  const onChangeCampusInput = (e) => {
    setInputValue(e.target.value);
    requestInputCampus(e.target.value);
  };

  const requestNickName = useDebounce(async (input) => {
    try {
      if (input !== "") {
        const response = await getNickName(input);
        if (response.is_valid) {
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
  });

  const onChangeNicknameInput = (e) => {
    const inputNicknameValue = e.target.value;

    if (inputNicknameValue === "") {
      setInputNickname(undefined);
    } else {
      setInputNickname(inputNicknameValue);
      requestNickName(inputNicknameValue);
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
      const responseSignup = await putSignup({
        campus_id: campusId,
        nickname: inputNickname,
      });
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
        <IconLogo widthSize="100%" heightSize="12em" />
      </SignUpHeader>
      <SignUpForm>
        <FormHeader>정보를 알려주세요</FormHeader>
        <LabelContainer htmlFor="university">
          <h3 className="header">소속 대학교</h3>
          <div className="univ info univ__info">검색 버튼을 눌러 대학교를 입력해주세요</div>
        </LabelContainer>
        <InputContainer>
          <input
            className="univ__search signup__form"
            type="text"
            name="university"
            value={inputValue}
            onChange={onChangeCampusInput}
          ></input>
          <button className="search__univ">
            <IconSearch width="35px" height="35px" />
          </button>
          <DropDownUL>
            <DropDown campusList={campusList} onSelected={onSelected} />
          </DropDownUL>
        </InputContainer>

        <LabelContainer htmlFor="nickname">
          <h3 className="header">닉네임</h3>
          <div className="univ info nickname__info">2~8자 한글, 영어 소문자로만 작성해주세요.</div>
        </LabelContainer>
        <InputContainer>
          <input
            className="nickname signup__form"
            type="text"
            name="nickname"
            value={inputNickname}
            onChange={onChangeNicknameInput}
          />
          <CheckValidNickname isValidNickname={isValidNickname} />
        </InputContainer>
        <button className="signup__conplete" onClick={onSubmit}>
          작성 완료
        </button>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUpPage;
