import React, { useEffect } from "react";
import { useHistory } from "react-router";
import qs from "qs";
import axios from "axios";
import { BASE_URL, KAKAO_URL, CALLBACK_URL } from "utils/constants/request";
import { LoginButton } from "./style";

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
        console.log(response.data);
        if (response.data.is_signed) {
          history.replace(`/main/${response.data.campus_id}`);
        } else {
          history.replace("/signup");
        }
      } catch (e) {
        console.error(e);
      }
    };

    if (codeQuery) {
      loginRequest();
    }
  }, []);

  const onClick = async () => {
    window.location.href = `${BASE_URL + KAKAO_URL}`;
  };

  return <LoginButton onClick={onClick}>카카오로 로그인하기</LoginButton>;
};

export default Login;
