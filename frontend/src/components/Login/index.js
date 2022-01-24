import React, { useEffect } from "react";
import { useHistory } from "react-router";
import qs from "qs";

import { BASE_URL, KAKAO_URL } from "utils/constants/request";
import { getLogin } from "utils/api";
import { LoginButton } from "./style";

const Login = () => {
  const history = useHistory();

  useEffect(() => {
    const codeQuery = qs.parse(window.location.search, {
      ignoreQueryPrefix: true,
    });

    const isCodeExist = Object.keys(codeQuery).length;

    const loginRequest = async () => {
      try {
        const response = await getLogin(codeQuery.code);
        console.log(response);
        if (response.is_signed) {
          history.replace(`/main/${response.campus_id}`);
        } else {
          history.replace("/signup");
        }
      } catch (e) {
        console.error(e);
      }
    };

    if (isCodeExist) {
      loginRequest();
    }
  }, []);

  const onClick = () => {
    window.location.href = `${BASE_URL + KAKAO_URL}`;
  };

  return <LoginButton onClick={onClick}>카카오로 로그인하기</LoginButton>;
};

export default Login;
