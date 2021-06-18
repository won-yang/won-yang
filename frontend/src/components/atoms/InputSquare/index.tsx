import React from 'react';
import { Input } from './style';

type Props = {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputSquare = ({ ...props }: Props) => {
  return <Input onChange={props.onChange} {...props}></Input>;
};

export default InputSquare;
