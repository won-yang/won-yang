import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { selectPostWrite, setSelectOption } from "store/Postwrite/PostwriteSlice";

import Button from "components/common/Button";
import PrevNext from "./common/PrevNext";
import { Content, Title } from "./common";

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
