import React from "react";
import PropTypes from "prop-types";

import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";

const usePathname = (props) => {
  const location = useLocation();
  const getWritePhase = () => {
    return location.pathname.split("/").pop();
  };

  return { location, getWritePhase };
};

usePathname.propTypes = {};

export default usePathname;
