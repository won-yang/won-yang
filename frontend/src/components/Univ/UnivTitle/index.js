import React from 'react';
import PropTypes from 'prop-types';

const UnivTitle = (props) => {
  return <div>{props.univName}</div>;
};

UnivTitle.propTypes = {
  univName: PropTypes.string.isRequired,
};

export default UnivTitle;
