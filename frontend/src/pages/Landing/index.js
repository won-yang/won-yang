import React from 'react';
import PropTypes from 'prop-types';
import UnivSearchbar from 'components/Univ/UnivSearchBar';
import Login from 'components/Login';
import { IconLogo } from 'components/Icon';
import { LandingWrapper, StringWrapper } from './style';

const LandingPage = (props) => {
  return (
    <LandingWrapper>
      <IconLogo />
      <StringWrapper>원룸 양도의 정보가 모이는 곳</StringWrapper>
      <UnivSearchbar />
      <Login />
    </LandingWrapper>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
