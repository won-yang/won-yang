import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
import { ReactComponent as IconSearch } from "assets/icon_search.svg";
import { DropDownList, InputForm, Button, Input } from "./style";

const BASE_URL = "http://localhost:8080";
const UNIV_API = "/api/university";
const styledInput = {
  padding: "1rem",
  fontSize: "1em",
  width: "20em",
  border: "5px solid #2e42a9",
};

const UnivSearchbar = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [campusList, setCampusList] = useState([]);
  const [isMobile, setIsMobile] = useState(1000);

  const onSelected = (e) => {
    // console.log(e);
    // console.log(e.target.innerText);
    // setInputValue(e.target.innerText);
    // setCampusList([]);
    // setIsInput(true);
    console.log("메인 페이지");
  };

  const request = async (inputV) => {
    try {
      if (inputV !== "") {
        console.log("리퀘스트 보낸다");
        const response = await fetch(`${BASE_URL}${UNIV_API}?name=${inputV}`);
        console.log(response);
        const data = await response.json();
        setCampusList(data.list);
        console.log(inputV);
      } else {
        console.log("아무것도 입력되지 않았다");
        setCampusList([]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const debounceCalled = debounce((input) => {
    request(input);
    console.log("debounce!!");
  }, 300);

  const onChangeHandler = (e) => {
    console.log(e);
    setInputValue(e.target.value);
    console.log(e.target.value);
    debounceCalled(e.target.value);
    console.log(inputValue);
  };

  const onClickHandler = (e) => {
    console.log(e);
    console.log(window.innerWidth);
    if (inputValue === "") {
      console.log("입력을 해");
    } else {
      debounceCalled(inputValue);
    }
    if (window.innerWidth < 700) {
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
      <ul style={{ position: "absolute" }}>
        {campusList &&
          campusList.map((item) => (
            <DropDownList
              key={item.id}
              onClick={onSelected}
            >{`${item.name}`}</DropDownList>
          ))}
      </ul>
    </InputForm>
  );
};

UnivSearchbar.propTypes = {};

export default UnivSearchbar;
