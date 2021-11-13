import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const RoomAddress = (props) => {
  return (
    <Container>
      <h1>주소</h1>
      <PostAddressText>농담시 농담구 농담로</PostAddressText>
      <span>*개인정보 보호를 위해 상세주소는 알려드리지 않습니다.</span>
    </Container>
  );
};

RoomAddress.propTypes = {};

export default RoomAddress;

const Container = styled.div`
  & span:last-child {
    color: ${({ theme }) => theme.colors.darkRed};
    font-size: ${({ theme }) => theme.fontSize.badgeFontSize};
  }
`;
const PostAddressText = styled.span`
  display: block;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.middleFontSize};
`;
