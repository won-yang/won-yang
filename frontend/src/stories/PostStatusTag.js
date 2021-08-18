import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const PostStatusTag = ({
  progress,
  done,
  expired,
  borderRadius,
  backgroundColor,
  fontSize,
  width,
}) => {
  const progress클래스 = progress ? "progress" : "";
  const done클래스 = done ? "done" : "";
  const expired클래스 = expired ? "expired" : "";
  console.log(width);
  return (
    <Button
      className={[progress클래스, done클래스, expired클래스].join("")}
      style={
        // borderRadius && { borderRadius },
        // backgroundColor && { backgroundColor },
        { width, fontSize, backgroundColor, borderRadius }
      }
    >
      {progress클래스 ? "진행중" : ""}
      {done클래스 ? "계약완료" : ""}
      {expired클래스 ? "만료" : ""}
    </Button>
  );
};

PostStatusTag.propTypes = {
  width: PropTypes.string,
  fontSize: PropTypes.string,
  backgroundColor: PropTypes.string,
  progress: PropTypes.bool,
  done: PropTypes.bool,
  expired: PropTypes.bool,
  borderRadius: PropTypes.string,
};

const Button = styled.button`
  border: none;
  padding: 5px;
  color: white;
  width: 60px;
  &.progress {
    background-color: #507bec;
  }
  &.done {
    background-color: #c82a2a;
  }
  &.expired {
    background-color: #2a9610;
  }
`;
