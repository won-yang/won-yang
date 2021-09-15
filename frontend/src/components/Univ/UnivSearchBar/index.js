import React, { useState, useCallback } from "react";
import { debounce } from "lodash";
import { ReactComponent as IconSearch } from "assets/icon_search.svg";
import { BASE_URL, UNIV_API } from "utils/constants/request";
import {
  DEBOUNCE_TIME,
  BREAK_POINT,
  DEFAULT_WIDTH,
} from "utils/constants/numbers";
import DropDown from "./DropDown";
import { InputForm, Button, Input } from "./style";

const UnivSearchbar = ({ onSelected }) => {
  const [inputValue, setInputValue] = useState("");
  const [campusList, setCampusList] = useState([]);
  const [isMobile, setIsMobile] = useState(DEFAULT_WIDTH);

  const requestCampusList = async (inputV) => {
    try {
      if (inputV !== "") {
        const response = await fetch(`${BASE_URL}${UNIV_API}?name=${inputV}`);
        const data = await response.json();
        setCampusList(data.list);
      } else {
        setCampusList([]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const debounceCalled = useCallback(
    debounce((input) => {
      requestCampusList(input);
    }, DEBOUNCE_TIME),
    []
  );

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
    debounceCalled(e.target.value);
  };

  const onClickHandler = () => {
    if (inputValue !== "") {
      debounceCalled(inputValue);
    }
    if (window.innerWidth < BREAK_POINT) {
      setIsMobile(window.innerWidth);
    } else {
      setIsMobile(window.innerWidth);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    debounceCalled(inputValue);
  };

  return (
    <>
      <InputForm
        isMobile={isMobile}
        name='univ-search'
        onSubmit={onSubmitHandler}
        onClick={onClickHandler}
      >
        <Input
          className='input'
          name='name'
          type='search'
          value={inputValue}
          onChange={onChangeHandler}
          placeholder='대학교를 입력해주세요'
        />
        <Button onClick={onClickHandler}>
          <IconSearch />
        </Button>
        <ul style={{ position: "absolute", height: "0px" }}>
          <DropDown campusList={campusList} onSelected={onSelected} />
        </ul>
      </InputForm>
    </>
  );
};

UnivSearchbar.propTypes = {};

export default UnivSearchbar;
