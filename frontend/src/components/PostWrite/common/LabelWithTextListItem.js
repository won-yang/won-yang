import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const LabelWithText = (props) => {
  const { titleText, text, children } = props;
  return (
    <li>
      <TitleText>{titleText}</TitleText>
      <Text>{text}</Text>
      {children}
    </li>
  );
};

LabelWithText.propTypes = {
  titleText: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
};

export default LabelWithText;

const TitleText = styled.span`
  font-size: 0.7em;
`;

const Text = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.blue};
`;
