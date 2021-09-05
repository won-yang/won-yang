import React, { useEffect } from "react";
import qs from "qs";
import axios from "axios";
import { LoginButton } from "./style";

const BASE_URL = "http://localhost:8080";
const KAKAO_URL = "/api/user/login";
const CALLBACK_URL = "/api/user/kakao-callback";

const Login = () => {
  useEffect(() => {
    const codeQuery = qs.parse(window.location.search, {
      ignoreQueryPrefix: true,
    });
    console.log(codeQuery);
    const haha = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL + CALLBACK_URL}?code=${codeQuery.code}`
        );
        console.log(response);
        // if (로그인) {
        //  // @TODO : 메인페이지로 이동
        // } else {
        //  // @TODO : 회원가입이므로 유저 정보 입력 페이지
        // }
      } catch (e) {
        console.log(e);
        // @TODO : 다시 랜딩 페이지
      }
    };
    haha();
  }, []);
  const onClick = async () => {
    window.location.href = `${BASE_URL + KAKAO_URL}`;
  };
  return (
    <>
      <LoginButton onClick={onClick}>카카오로 로그인하기</LoginButton>
    </>
  );
};

export default Login;
