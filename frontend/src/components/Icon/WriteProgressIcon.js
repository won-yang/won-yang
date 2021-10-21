import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as CheckIcon } from "assets/icon_check.svg";
import IconContainer from "./IconContainer";

const WriteProgressIcon = (props) => {
  return (
    <ProgressBarIconContainer widthSize="50px" heightSize="50px">
      {props.isWrited && (
        <CheckContainer widthSize="50px" heightSize="50px">
          <CheckIcon />
        </CheckContainer>
      )}
      {props.children}
    </ProgressBarIconContainer>
  );
};

WriteProgressIcon.propTypes = {
  children: PropTypes.node.isRequired,
  isWrited: PropTypes.bool,
};

export default WriteProgressIcon;

const ProgressBarIconContainer = styled(IconContainer)`
  position: relative;
`;

const CheckContainer = styled(IconContainer)`
  position: absolute;
  bottom: 40px;
`;
