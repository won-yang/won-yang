import Button from "components/common/Button";
import Input from "components/common/Input";
import React from "react";
import styled from "styled-components";
import PrevNext from "./PrevNext";

const PhaseFour = () => {
  return (
    <>
      <AddressSection>
        <InputDescription>주소</InputDescription>
        <Input></Input>
        <InputDescription>상세주소</InputDescription>
        <Input></Input>
        <div>
          <input type="checkbox" />
          <span>주소 오픈</span>
        </div>
      </AddressSection>
      <BuildingFloorSection>
        <InputDescription>건물 층수</InputDescription>
        <Input placeholder="현재 층을 입력"></Input>
        <Input placeholder="건물 전체 층 입력"></Input>
      </BuildingFloorSection>
      <BuildingStructureSection>
        <InputDescription>건물 구조</InputDescription>
        <CheckboxContainer>
          <Input type="radio" value="아파트" id="apart" />
          <label htmlFor="apart">아파트</label>
          <Input type="radio" value="단주" id="apart" />
          <label htmlFor="apart">단독 주택</label>
          <Input type="radio" value="다주" id="apart" />
          <label htmlFor="apart">다세대 주택</label>
          <Input type="radio" value="빌" id="apart" />
          <label htmlFor="apart">빌라</label>
          <Input type="radio" value="오" id="apart" />
          <label htmlFor="apart">오피스텔</label>
          <Input type="radio" value="기" id="apart" />
          <label htmlFor="apart">기타</label>
          <Input placeholder="직접 입력" />
        </CheckboxContainer>
      </BuildingStructureSection>
      <RoomStructureSection>
        <InputDescription>방의 구조</InputDescription>
        <CheckboxContainer>
          <Input type="radio" value="분리형 원룸" id="apart" />
          <label htmlFor="apart">분리형 원룸</label>
          <Input type="radio" value="일체형 원룸" id="apart" />
          <label htmlFor="apart">일체형 원룸</label>
          <Input type="radio" value="복층 원룸" id="apart" />
          <label htmlFor="apart">복층 원룸</label>
          <Input type="radio" value="빌" id="apart" />
          <label htmlFor="apart">투름</label>
          <Input type="radio" value="오" id="apart" />
          <label htmlFor="apart">쓰리룸</label>
          <Input type="radio" value="기" id="apart" />
          <label htmlFor="apart">기타</label>
          <Input placeholder="직접 입력" />
        </CheckboxContainer>
      </RoomStructureSection>

      <WindowDirectionSection>
        <InputDescription>창의 방향</InputDescription>
        <WindowDirectionButtonContainer>
          <WindowDirectionButton>남향</WindowDirectionButton>
          <WindowDirectionButton>서향</WindowDirectionButton>
          <WindowDirectionButton>북향</WindowDirectionButton>
          <WindowDirectionButton>동향</WindowDirectionButton>
        </WindowDirectionButtonContainer>
      </WindowDirectionSection>

      <TransferTimeSection>
        <InputDescription>학교까지의 거리,,음..필여한데이터인가</InputDescription>
        <Input placeholder="도보로 걸리는 시각"></Input>
        <Input placeholder="대중 교통으로 걸리는 시각"></Input>
      </TransferTimeSection>
      <PrevNext />
    </>
  );
};

PhaseFour.propTypes = {};

export default PhaseFour;

const AddressSection = styled.div`
  display: flex;
  flex-direction: column;
  & span:last-child {
  }
`;

const BuildingFloorSection = styled.div``;

const BuildingStructureSection = styled.div``;

const RoomStructureSection = styled.div``;

const WindowDirectionSection = styled.div``;

const TransferTimeSection = styled.div``;

const InputDescription = styled.span`
  display: block;
`;

const WindowDirectionButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const WindowDirectionButton = styled(Button)`
  line-height: 25px;
  background-color: ${({ theme }) => theme.colors.oppositeDefalut};
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;

const CheckboxContainer = styled.div`
  & label {
    padding-right: 15px;
  }
`;
