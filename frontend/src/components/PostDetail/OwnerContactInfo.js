import React from "react";
import PropTypes from "prop-types";

const OwnerContactInfo = (props) => {
  const { contact } = props;
  return (
    <div>
      <h1>연락처</h1>
      <a href={contact}>{contact}</a>
    </div>
  );
};

OwnerContactInfo.propTypes = {
  contact: PropTypes.string,
};

export default OwnerContactInfo;
