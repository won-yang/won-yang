import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from 'assets/logo.svg';
import IconContainer from './IconContainer';

const IconLogo = (props) => {
  return (
    <IconContainer {...props}>
      <Logo alt='logo'></Logo>
    </IconContainer>
  );
};

IconLogo.propTypes = {
  widthSize: PropTypes.string.isRequired,
  heightSize: PropTypes.string.isRequired,
};

export default IconLogo;
