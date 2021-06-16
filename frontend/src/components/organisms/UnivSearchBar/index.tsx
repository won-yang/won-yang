import React from 'react';
import InputSquare from 'src/components/InputSquare';

type Props = {
  children: JSX.Element | JSX.Element[];
};
const UnivSearchBar = ({ children }: Props) => {
  return (
    <div>
      { children }
    </div>
  );
};

export default UnivSearchBar;
