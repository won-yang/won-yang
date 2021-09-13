import React, { useEffect } from "react";
import { useHistory } from "react-router";
import qs from "qs";
import axios from "axios";
import { LoginButton } from "./style";

const BASE_URL = "http://localhost:8080";
const KAKAO_URL = "/api/user/login";
const CALLBACK_URL = "/kakao-callback";

const Login = () => {
  const history = useHistory();

  useEffect(() => {
    const codeQuery = qs.parse(window.location.search, {
      ignoreQueryPrefix: true,
    });

    const loginRequest = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL + KAKAO_URL + CALLBACK_URL}?code=${codeQuery.code}`,
          { withCredentials: true }
        );
        console.log(response);
        if (response.data.isSigned) {
          // main page
          history.replace("/main");
        } else {
          history.replace("/signup");
        }
      } catch (e) {
        console.log(e);
      }
    };

    if (codeQuery) {
      loginRequest();
    }
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
