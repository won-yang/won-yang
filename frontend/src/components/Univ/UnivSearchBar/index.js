import React, { useState } from 'react';
import { debounce } from 'lodash';

const BASE_URL = 'http://localhost:8080';

const UnivSearchbar = (props) => {
  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const request = async () => {
      try {
        const UNIV_API = '/api/school';

        const response = await fetch(
          `${BASE_URL}${UNIV_API}?name=${inputValue}`
        );
        console.log(response);
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    request();
  };

  return (
    <form name='univ-search' onSubmit={onSubmitHandler}>
      <input
        name='name'
        type='search'
        value={inputValue}
        onChange={onChangeHandler}
        placeholder='대학교를 입력해주세요'
      />
    </form>
  );
};

UnivSearchbar.propTypes = {};

export default UnivSearchbar;
