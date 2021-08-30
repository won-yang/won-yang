import React from "react";
import styled from "styled-components";
import { device } from "styles/media";

const STATUS_TEXT = {
  IN_PROGRESS: "진행중",
  EXPIRED: "만료",
  CONTRACTED: "계약완료",
};

const Badge = ({ status }) => {
  return <Wrapper className={status}>{STATUS_TEXT[status]}</Wrapper>;
};

export default Badge;

const Wrapper = styled.div`
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
  &.CONTRACTED {
    background-color: ${(props) => props.theme.greenColor};
  }
  &.IN_PROGRESS {
    background-color: ${(props) => props.theme.purpleColor};
  }
  &.EXPIRED {
    background-color: ${(props) => props.theme.redColor};
  }
`;
