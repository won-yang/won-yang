import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';

const BASE_URL = 'http://localhost:8080';
const styledInput = { padding: '1rem', fontSize: '1em', width: '20em' };

const UnivSearchbar = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [dataList, setDataList] = useState([]);

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const onSelected = (e) => {
    console.log(e);
    console.log(e.target.innerText);
    setInputValue(e.target.innerText);
  };

  const onClickHandler = (e) => {
    console.log('버튼누름');
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
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
          placeholder='대학교를 입력해주세요'
        />
        <span onClick={onClickHandler}>[대충 돋보기]</span>
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
