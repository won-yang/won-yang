import React from "react";
import PropTypes from "prop-types";
import PhaseThree from "components/PostWrite/PhaseThree";
import PrevNext from "components/PostWrite/PrevNext";

const PostWritePage = (props) => {
  return (
    <div>
      <PhaseThree />
      <PrevNext />
    </div>
  );
};

PostWritePage.propTypes = {};

export default PostWritePage;
