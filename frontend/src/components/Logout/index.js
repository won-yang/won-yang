import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { setUserInfo } from "store/User/userSlice";
import styled from "styled-components";
import { getLogout } from "utils/api";

const Logout = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      const response = await getLogout();
      if (+response.status === 200) {
        dispatch(setUserInfo(0));
        history.replace(`/`);
      } else {
        window.alert("로그아웃에 실패했습니다. ");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return <SideButton onClick={logoutHandler}>로그아웃</SideButton>;
};

const SideButton = styled.div`
  padding: 20px;
  cursor: pointer;
`;

export default Logout;
