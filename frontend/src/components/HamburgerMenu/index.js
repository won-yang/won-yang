import React from 'react';
import PropTypes from 'prop-types';
import { Container, HamburgerSticks } from './style';

const HamburgerMenu = (props) => {
  return (
    <Container>
      <HamburgerSticks></HamburgerSticks>
    </Container>
  );
};

HamburgerMenu.propTypes = {};

export default HamburgerMenu;
