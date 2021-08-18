import React from "react";
import styled from "styled-components";
import { device } from "styles/media";

const STATUS_TEXT = {
  progress: "진행중",
  expired: "만료",
  contracted: "계약완료",
};

const PostStatusBadge = ({ status }) => {
  return <Badge className={status}>{STATUS_TEXT[status]}</Badge>;
};

export default PostStatusBadge;

const Badge = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 60px;
  height: 23px;
  line-height: 23px;
  border-radius: 8px;
  text-align: center;
  font-size: ${(props) => props.theme.badgeFontSize};
  color: white;
  &.contracted {
    background-color: ${(props) => props.theme.greenColor};
  }
  &.progress {
    background-color: ${(props) => props.theme.purpleColor};
  }
  &.expired {
    background-color: ${(props) => props.theme.redColor};
  }
`;
