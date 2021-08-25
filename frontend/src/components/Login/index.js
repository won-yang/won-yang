import React from 'react';
import { LoginButton } from './style';

const BASE_URL = 'http://localhost:8080';
const KAKAO_URL = '/api/user/login';

const Login = () => {
  const onClick = async () => {
    window.location.href = `${BASE_URL}${KAKAO_URL}`;
  };
  return (
    <>
      <LoginButton onClick={onClick}>카카오로 로그인하기</LoginButton>
    </>
  );
};

export default Login;
