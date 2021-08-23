import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';

const BASE_URL = 'http://localhost:8080';
const styledInput = {
  padding: '1rem',
  fontSize: '1em',
  width: '20em',
  border: '1px solid navy',
};

const UnivSearchbar = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [dataList, setDataList] = useState([]);
  const [isInput, setIsInput] = useState(false);

  const onSelected = (e) => {
    console.log(e);
    console.log(e.target.innerText);
    setInputValue(e.target.innerText);
    setIsInput(true);
  };

  const request = async () => {
    try {
      const UNIV_API = '/api/school';
      if (inputValue !== '') {
        const response = await fetch(
          `${BASE_URL}${UNIV_API}?name=${inputValue}`
        );
        console.log(response);
        const data = await response.json();
        data.list.forEach((item) => console.log(item.name));
        data.list.forEach((item) => console.log(item.id));
        setDataList(
          data.list.map((item) => (
            <DropDownList
              key={item.id}
              onClick={onSelected}
            >{`${item.name}`}</DropDownList>
          ))
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const debounceCalled = debounce(() => {
    request();
    console.log('debounce!!');
  }, 500);

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
    debounceCalled();
    setIsInput(false);
    console.log(inputValue);
  };

  const onClickHandler = (e) => {
    console.log('버튼누름');
    if (isInput === true) {
      console.log('다음 화면');
    } else {
      console.log('계속 검색');
      request();
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    request();
  };

  return (
    <>
      <form name='univ-search' onSubmit={onSubmitHandler}>
        <input
          style={styledInput}
          name='name'
          type='search'
          value={inputValue}
          onChange={onChangeHandler}
          onKeyUp={onChangeHandler}
          on
          placeholder='대학교를 입력해주세요'
        />
        {isInput ? (
          <span onClick={onClickHandler}>대충 다음화면</span>
        ) : (
          <span onClick={onClickHandler}>[대충 돋보기]</span>
        )}
        <ul>{dataList && dataList.map((item) => item)}</ul>
      </form>
    </>
  );
};

UnivSearchbar.propTypes = {};

const DropDownList = styled('li')`
  border: 1px solid navy;
  border-top: none;
  padding: 1em;
  width: 20em;
`;

export default UnivSearchbar;
