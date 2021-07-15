import React from 'react';
import PropTypes from 'prop-types';

export const HamburgerMenuModal = () => {
  return <div>1234</div>;
};

HamburgerMenuModal.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

HamburgerMenuModal.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
