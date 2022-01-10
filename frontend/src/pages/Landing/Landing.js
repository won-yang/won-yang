import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectUser } from "store/User/userSlice";

import UnivSearchbar from "components/Univ/UnivSearchBar";
import Login from "components/Login";
import { IconLogo } from "components/Icon";
import { useHistory } from "react-router";
import { LandingWrapper, StringWrapper, Wrapper } from "./style";

const LandingPage = (props) => {
  const { userInfo } = useSelector(selectUser);

  const history = useHistory();
  const onSelected = (e, id) => {
    if (id) {
      history.replace(`/main/${id}`);
    } else {
      console.log("id == ", id);
    }
  };
  useEffect(() => {
    if (userInfo) {
      history.replace(`/main/${userInfo.campus_id}`);
      console.log(userInfo);
    }
  }, [userInfo]);
  return (
    <LandingWrapper>
      <Wrapper>
        <IconLogo widthSize="20em" heightSize="20em" />
        <StringWrapper>원룸 양도의 정보가 모이는 곳</StringWrapper>
      </Wrapper>
      <Wrapper>
        <UnivSearchbar onSelected={onSelected} />
        <Login />
      </Wrapper>
    </LandingWrapper>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
