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
  const progressClass = progress ? "progress" : "";
  const doneClass = done ? "done" : "";
  const expiredClass = expired ? "expired" : "";
  return (
    <Button
      className={[progressClass, doneClass, expiredClass].join("")}
      style={
        // borderRadius && { borderRadius },
        // backgroundColor && { backgroundColor },
        { width, fontSize, backgroundColor, borderRadius }
      }
    >
      {progressClass ? "진행중" : ""}
      {doneClass ? "계약완료" : ""}
      {expiredClass ? "만료" : ""}
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
