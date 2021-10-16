import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const PhaseFive = (props) => {
  return (
    <>
      <HomeApplianceSection>
        <InputDescription>가전 제품</InputDescription>
        <button>세탁기</button>
        <button>에어컨</button>
        <button>냉장고</button>
        <button>전자레인지</button>
        <button>TV</button>
        <InputDescription>선택된 옵션</InputDescription>
      </HomeApplianceSection>

      <FurnitureSection>
        <InputDescription>가구</InputDescription>
        <button>책장</button>
        <button>옷장</button>
        <button>신발장</button>
        <button>책상 / 의자</button>
        <button>침대</button>
        <InputDescription>선택된 옵션</InputDescription>
      </FurnitureSection>

      <ExtraOptionSection>
        <InputDescription>기타</InputDescription>
        <button>CCTV</button>
        <button>도어락</button>
        <button>열쇠</button>
        <button>주차장</button>
        <button>반려동물</button>
        <InputDescription>선택된 옵션</InputDescription>
      </ExtraOptionSection>
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
