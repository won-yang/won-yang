import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const PostDescription = (props) => {
  const { contents } = props;
  return (
    <div>
      <p>{contents}</p>
    </div>
  );
};

PostDescription.propTypes = {
  contents: PropTypes.string,
};

export default PostDescription;
