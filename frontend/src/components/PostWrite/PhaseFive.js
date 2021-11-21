import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { selectPostWrite, setSelectOption } from "store/Postwrite/PostwriteSlice";

import Button from "components/common/Button";
import PrevNext from "./common/PrevNext";

export const HOME_APPLIANCES = [
  {
    name: "세탁기",
    isSelected: false,
    kind: "homeAppliances",
  },
  {
    name: "에어컨",
    isSelected: false,
    kind: "homeAppliances",
  },
  {
    name: "냉장고",
    isSelected: false,
    kind: "homeAppliances",
  },
  {
    name: "전자레인지",
    isSelected: false,
    kind: "homeAppliances",
  },
  {
    name: "TV",
    isSelected: false,
    kind: "homeAppliances",
  },
];

export const FURNITURES = [
  {
    name: "책장",
    isSelected: false,
    kind: "furnitures",
  },
  {
    name: "옷장",
    isSelected: false,
    kind: "furnitures",
  },
  {
    name: "신발장",
    isSelected: false,
    kind: "furnitures",
  },
  {
    name: "책상 / 의자",
    isSelected: false,
    kind: "furnitures",
  },
  {
    name: "침대",
    isSelected: false,
    kind: "furnitures",
  },
];

export const ETC_OPTIONS = [
  {
    name: "CCTV",
    isSelected: false,
    kind: "etc",
  },
  {
    name: "도어락",
    isSelected: false,
    kind: "etc",
  },
  {
    name: "열쇠",
    isSelected: false,
    kind: "etc",
  },
  {
    name: "주차장",
    isSelected: false,
    kind: "etc",
  },
  {
    name: "반려동물",
    isSelected: false,
    kind: "etc",
  },
];

const PhaseFive = (props) => {
  const dispatch = useDispatch();

  const { homeAppliances, furnitures, etcOptions } = useSelector(selectPostWrite);

  const handleClickOptions = (e, data) => {
    dispatch(setSelectOption(data));
  };
  return (
    <>
      <HomeApplianceSection>
        <InputDescription>가전 제품</InputDescription>
        <ButtonContainer>
          {homeAppliances.map((option) => (
            <OptionButton
              onClick={(e) => handleClickOptions(e, option)}
              isSelected={option.isSelected}
              key={option.name}
              id={option.name}
            >
              {option.name}
            </OptionButton>
          ))}
        </ButtonContainer>
        <InputDescription>선택된 옵션</InputDescription>
      </HomeApplianceSection>

      <FurnitureSection>
        <InputDescription>가구</InputDescription>
        <ButtonContainer>
          {furnitures.map((option) => (
            <OptionButton
              id={option.name}
              onClick={(e) => handleClickOptions(e, option)}
              isSelected={option.isSelected}
              key={option.name}
            >
              {option.name}
            </OptionButton>
          ))}
        </ButtonContainer>
        <InputDescription>선택된 옵션</InputDescription>
      </FurnitureSection>

      <ExtraOptionSection>
        <InputDescription>기타</InputDescription>
        <ButtonContainer>
          {etcOptions.map((option) => (
            <OptionButton
              id={option.name}
              onClick={(e) => handleClickOptions(e, option)}
              isSelected={option.isSelected}
              key={option.name}
            >
              {option.name}
            </OptionButton>
          ))}
        </ButtonContainer>
        <InputDescription>선택된 옵션</InputDescription>
      </ExtraOptionSection>
      <PrevNext />
    </>
  );
};

PhaseFive.propTypes = {};

export default PhaseFive;

const HomeApplianceSection = styled.div``;

const FurnitureSection = styled.div``;

const InputDescription = styled.span`
  display: block;
`;
const ExtraOptionSection = styled.div``;

const OptionButton = styled(Button)`
  border-radius: 8px;
  min-width: 60px;
  background-color: ${({ theme }) => theme.colors.darkGray};
  color: white;
  &.clicked {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  ${(props) =>
    props.isSelected &&
    css`
      background-color: ${props.theme.colors.primary};
    `}
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;
