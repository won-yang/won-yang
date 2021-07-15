import React from 'react';
import PropTypes from 'prop-types';
import UnivTitle from 'components/Univ/UnivTitle';
import { HamburgerMenu } from 'components/Hamburger';
import { IconLogo } from 'components/Icon';
import { Container } from './style';

const Header = (props) => {
  return (
    <Container id='header'>
      <IconLogo widthSize='65px' heightSize='100%'></IconLogo>
      <UnivTitle univName={props.univName}></UnivTitle>
      <HamburgerMenu></HamburgerMenu>
    </Container>
  );
};

Header.defaultProps = {
  univName: '농담곰대학교',
};

Header.propTypes = {
  univName: PropTypes.string.isRequired,
};

export default Header;
