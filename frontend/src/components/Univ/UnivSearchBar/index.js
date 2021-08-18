import React, { useState } from 'react';
import { debounce } from 'lodash';

const UnivSearchbar = (props) => {
  const [inputValue, setInputValue] = useState('');

  const onChangeHandling = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  return (
    <form name='univ-search'>
      <input
        name='name'
        type='search'
        value={inputValue}
        onChange={onChangeHandling}
        placeholder='대학교를 입력해주세요'
      />
    </form>
  );
};

UnivSearchbar.propTypes = {};

export default UnivSearchbar;
