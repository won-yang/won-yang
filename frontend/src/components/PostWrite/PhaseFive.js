import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { selectPostWrite, setSelectOption } from "store/Postwrite/PostwriteSlice";

import Button from "components/common/Button";
import PrevNext from "./common/PrevNext";
import { Content, Title } from "./common";

export const HOME_APPLIANCES = [
  {
    id: 1,
    name: "세탁기",
    isSelected: false,
    kind: "homeAppliances",
  },
  {
    id: 2,
    name: "에어컨",
    isSelected: false,
    kind: "homeAppliances",
  },
  {
    id: 3,
    name: "냉장고",
    isSelected: false,
    kind: "homeAppliances",
  },
  {
    id: 4,
    name: "전자레인지",
    isSelected: false,
    kind: "homeAppliances",
  },
  {
    id: 5,
    name: "TV",
    isSelected: false,
    kind: "homeAppliances",
  },
  {
    id: 6,
    name: "가스레인지",
    isSelected: false,
    kind: "homeAppliances",
  },
];

export const FURNITURES = [
  {
    id: 7,
    name: "책장",
    isSelected: false,
    kind: "furnitures",
  },
  {
    id: 8,
    name: "옷장",
    isSelected: false,
    kind: "furnitures",
  },
  {
    id: 9,
    name: "신발장",
    isSelected: false,
    kind: "furnitures",
  },
  {
    id: 10,
    name: "책상 / 의자",
    isSelected: false,
    kind: "furnitures",
  },
  {
    id: 11,
    name: "침대",
    isSelected: false,
    kind: "furnitures",
  },
];

export const ETC_OPTIONS = [
  {
    id: 12,
    name: "CCTV",
    isSelected: false,
    kind: "etc",
  },
  {
    id: 13,
    name: "도어락",
    isSelected: false,
    kind: "etc",
  },
  {
    id: 14,
    name: "열쇠",
    isSelected: false,
    kind: "etc",
  },
  {
    id: 15,
    name: "주차장",
    isSelected: false,
    kind: "etc",
  },
  {
    id: 16,
    name: "반려동물",
    isSelected: false,
    kind: "etc",
  },
  {
    id: 17,
    name: "베란다",
    isSelected: false,
    kind: "etc",
  },
  {
    id: 18,
    name: "방충망",
    isSelected: false,
    kind: "etc",
  },
  {
    id: 19,
    name: "방범창",
    isSelected: false,
    kind: "etc",
  },
  {
    id: 20,
    name: "블라인드 / 커튼",
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
        <div>
          <Title>양도하려는 방의 옵션을 선택해주세요.</Title>
          <Content>가구는 어떤게 있는지, 보안은 어떤지 옵션을 선택하여 알려주세요.</Content>
        </div>
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
  border-radius: 5px;
  min-height: 30px;

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
  white-space: nowrap;
`;
const ButtonContainer = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(5, 1fr);
`;

const Secition = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
