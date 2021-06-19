import React from 'react';
import InputSquare from '../../atoms/InputSquare';

const UnivSearchBar = () => {
  const onChange = () => {
    console.log('hello');
  }
  return (
    <div>
      <InputSquare
        onChange={ onChange }
        placeholder="원룸 근처 대학명을 작성해주세요."></InputSquare>
      <button>SearchBtn</button>
    </div>
  );
};

export default UnivSearchBar;