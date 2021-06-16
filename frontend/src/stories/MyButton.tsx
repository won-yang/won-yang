import React from 'react';
import './button.css';

// interface 선언
export interface MyButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  variant: string;
}
export const MyButton: React.FC<MyButtonProps> = ({
  //default props 지정하기
  primary = false,
  size = 'large',
  backgroundColor,
  label,
  variant,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type='button'
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
    >
      MyButton{label}
      {variant}
    </button>
  );
};
