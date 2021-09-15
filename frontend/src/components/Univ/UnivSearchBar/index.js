import React, { useState, useCallback } from "react";
import { debounce } from "lodash";
import { ReactComponent as IconSearch } from "assets/icon_search.svg";
import { BASE_URL, UNIV_API } from "utils/constants/request";
import { DropDownList, InputForm, Button, Input } from "./style";

const UnivSearchbar = ({ onSelected }) => {
  const [inputValue, setInputValue] = useState("");
  const [campusList, setCampusList] = useState([]);
  const [isMobile, setIsMobile] = useState(1000);

  const request = async (inputV) => {
    try {
      if (inputV !== "") {
        console.log("리퀘스트 보낸다");
        const response = await fetch(`${BASE_URL}${UNIV_API}?name=${inputV}`);
        console.log(response);
        const data = await response.json();
        console.log(data);
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

  const debounceCalled = useCallback(
    debounce((input) => {
      request(input);
      console.log("debounce!!");
    }, 300),
    []
  );

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
          {campusList &&
            campusList.map((item) => (
              <DropDownList
                key={item.id}
                onMouseUp={(e) => onSelected(e, item.id)}
              >{`${item.name}`}</DropDownList>
            ))}
        </ul>
      </InputForm>
    </>
  );
};

UnivSearchbar.propTypes = {};

export default UnivSearchbar;
