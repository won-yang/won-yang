import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "components/common/Button";
import PrevNext from "./PrevNext";

const PhaseFive = (props) => {
  return (
    <>
      <HomeApplianceSection>
        <InputDescription>가전 제품</InputDescription>
        <ButtonContainer>
          <OptionButton>세탁기</OptionButton>
          <OptionButton>에어컨</OptionButton>
          <OptionButton>냉장고</OptionButton>
          <OptionButton>전자레인지</OptionButton>
          <OptionButton>TV</OptionButton>
        </ButtonContainer>
        <InputDescription>선택된 옵션</InputDescription>
      </HomeApplianceSection>

      <FurnitureSection>
        <InputDescription>가구</InputDescription>
        <ButtonContainer>
          <OptionButton>책장</OptionButton>
          <OptionButton>옷장</OptionButton>
          <OptionButton>신발장</OptionButton>
          <OptionButton>책상 / 의자</OptionButton>
          <OptionButton>침대</OptionButton>
        </ButtonContainer>
        <InputDescription>선택된 옵션</InputDescription>
      </FurnitureSection>

      <ExtraOptionSection>
        <InputDescription>기타</InputDescription>
        <ButtonContainer>
          <OptionButton>CCTV</OptionButton>
          <OptionButton>도어락</OptionButton>
          <OptionButton>열쇠</OptionButton>
          <OptionButton>주차장</OptionButton>
          <OptionButton>반려동물</OptionButton>
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
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;
