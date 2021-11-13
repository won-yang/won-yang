import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Logo } from "assets/logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import IconContainer from "./IconContainer";

const IconLogo = (props) => {
  return (
    <IconContainer {...props}>
      <Link to="/">
        <Logo alt="logo"></Logo>
      </Link>
    </IconContainer>
  );
};

IconLogo.propTypes = {
  widthSize: PropTypes.string.isRequired,
  heightSize: PropTypes.string.isRequired,
};

export default IconLogo;
