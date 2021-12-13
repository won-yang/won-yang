import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const RoomAddress = (props) => {
  const { address, address_detail, isPosted } = props;
  return (
    <Container>
      <h1>주소</h1>
      <PostAddressText>{address}</PostAddressText>
      {isPosted && <span>{address_detail}</span>}
    </Container>
  );
};

RoomAddress.propTypes = {
  address: PropTypes.string,
  isPosted: PropTypes.bool,
};

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
