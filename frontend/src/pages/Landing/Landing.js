import React from "react";
import PropTypes from "prop-types";
import UnivSearchbar from "components/Univ/UnivSearchBar";
import Login from "components/Login";
import { IconLogo } from "components/Icon";
import { useHistory } from "react-router";
import { LandingWrapper, StringWrapper, Wrapper } from "./style";

const LandingPage = (props) => {
  const history = useHistory();
  const onSelected = (e, id) => {
    if (id) {
      history.replace(`/main/${id}`);
    } else {
      console.log("id == ", id);
    }
  };
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
