import React from "react";
import OptionBadge from "components/common/OptionBadge";
import styled from "styled-components";

const RoomOptionList = (props) => {
  const { homeAppliances, etcOptions, furnitures } = props;
  return (
    <>
      <h1>옵션</h1>
      <OptionList>
        {homeAppliances?.map(
          (option) =>
            option.isSelected && (
              <li key={option.name}>
                <OptionBadge>{option.name}</OptionBadge>
              </li>
            ),
        )}
        {furnitures?.map(
          (option) =>
            option.isSelected && (
              <li key={option.name}>
                <OptionBadge>{option.name}</OptionBadge>
              </li>
            ),
        )}
        {etcOptions?.map(
          (option) =>
            option.isSelected && (
              <li key={option.name}>
                <OptionBadge>{option.name}</OptionBadge>
              </li>
            ),
        )}
      </OptionList>
    </>
  );
};

export default RoomOptionList;

const OptionList = styled.ul`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 15px;
  & li {
    width: fit-content;
  }
`;
