import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { DropDownList } from './style';

const BASE_URL = 'http://localhost:8080';
const UNIV_API = '/api/university';
const styledInput = {
  padding: '1rem',
  fontSize: '1em',
  width: '20em',
  border: '5px solid navy',
};

const UnivSearchbar = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [campusList, setCampusList] = useState([]);
  const [isInput, setIsInput] = useState(false);

  const onSelected = (e) => {
    console.log(e);
    console.log(e.target.innerText);
    setInputValue(e.target.innerText);
    setIsInput(true);
  };

  const request = async (inputV) => {
    try {
      if (inputV !== '') {
        console.log('리퀘스트 보낸다');
        const response = await fetch(`${BASE_URL}${UNIV_API}?name=${inputV}`);
        console.log(response);
        const data = await response.json();
        data.list.forEach((item) => console.log(item.name));
        data.list.forEach((item) => console.log(item.id));
        setCampusList(
          data.list.map((item) => (
            <DropDownList
              key={item.id}
              onClick={onSelected}
            >{`${item.name}`}</DropDownList>
          ))
        );
        // '이거 JSX를 밑으로 뺄 것'
        console.log(inputV);
      } else {
        console.log('아무것도 입력되지 않았다');
        setCampusList([]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const debounceCalled = debounce((input) => {
    request(input);
    console.log('debounce!!');
  }, 300);

  const onChangeHandler = (e) => {
    console.log(e);
    setInputValue(e.target.value);
    console.log(e.target.value);
    debounceCalled(e.target.value);
    setIsInput(false);
    console.log(inputValue);
  };

  const onClickHandler = (e) => {
    console.log('버튼누름');
    if (isInput === true) {
      console.log('다음 화면');
    } else {
      console.log('계속 검색');
      request(inputValue);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    debounceCalled(inputValue);
  };

  return (
    <>
      <form
        name='univ-search'
        onSubmit={onSubmitHandler}
        style={{ position: 'relative' }}
      >
        <input
          style={styledInput}
          name='name'
          type='search'
          value={inputValue}
          onChange={onChangeHandler}
          placeholder='대학교를 입력해주세요'
        />
        {isInput ? (
          <span onClick={onClickHandler}>대충 다음화면</span>
        ) : (
          <span onClick={onClickHandler}>[대충 돋보기]</span>
        )}
        {/* 이 부분 컴포넌트로 따로 뺄 것 */}
        <ul style={{ position: 'absolute' }}>
          {campusList && campusList.map((item) => item)}
        </ul>
      </form>
    </>
  );
};

UnivSearchbar.propTypes = {};

export default UnivSearchbar;
