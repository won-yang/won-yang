import React from 'react';
import PropTypes from 'prop-types';
import { IconLogo } from 'components/Icon';
import { Container } from './style';

const Header = (props) => {
  return (
    <Container id='header'>
      <IconLogo widthSize='50px' heightSize='50px'></IconLogo>
    </Container>
  );
};

Header.propTypes = {};

export default Header;
