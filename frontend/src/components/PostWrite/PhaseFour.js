import React from "react";
import styled from "styled-components";

const PhaseFour = () => {
  return (
    <>
      <AddressSection>
        <InputDescription>주소</InputDescription>
        <input></input>
        <InputDescription>상세주소</InputDescription>
        <input></input>
        <div>
          <input type="checkbox" />
          <span>주소 오픈</span>
        </div>
      </AddressSection>
      <BuildingFloorSection>
        <InputDescription>건물 층수</InputDescription>
        <input placeholder="현재 층을 입력"></input>
        <input placeholder="건물 전체 층 입력"></input>
      </BuildingFloorSection>
      <BuildingStructureSection>
        <InputDescription>건물 구조</InputDescription>
        <input type="radio" value="아파트" id="apart" />
        <label htmlFor="apart">아파트</label>
        <input type="radio" value="단주" id="apart" />
        <label htmlFor="apart">단독 주택</label>
        <input type="radio" value="다주" id="apart" />
        <label htmlFor="apart">다세대 주택</label>
        <input type="radio" value="빌" id="apart" />
        <label htmlFor="apart">빌라</label>
        <input type="radio" value="오" id="apart" />
        <label htmlFor="apart">오피스텔</label>
        <input type="radio" value="기" id="apart" />
        <label htmlFor="apart">기타</label>
        <input placeholder="직접 입력" />
      </BuildingStructureSection>
      <RoomStructureSection>
        <InputDescription>방의 구조</InputDescription>
        <input type="radio" value="분리형 원룸" id="apart" />
        <label htmlFor="apart">분리형 원룸</label>
        <input type="radio" value="일체형 원룸" id="apart" />
        <label htmlFor="apart">일체형 원룸</label>
        <input type="radio" value="복층 원룸" id="apart" />
        <label htmlFor="apart">복층 원룸</label>
        <input type="radio" value="빌" id="apart" />
        <label htmlFor="apart">투름</label>
        <input type="radio" value="오" id="apart" />
        <label htmlFor="apart">쓰리룸</label>
        <input type="radio" value="기" id="apart" />
        <label htmlFor="apart">기타</label>
        <input placeholder="직접 입력" />
      </RoomStructureSection>

      <WindowDirectionSection>
        <InputDescription>창의 방향</InputDescription>
        <button>남향</button>
        <button>서향</button>
        <button>북향</button>
        <button>동향</button>
      </WindowDirectionSection>

      <TransferTimeSection>
        <InputDescription>학교까지의 거리,,음..필여한데이터인가</InputDescription>
        <input placeholder="도보로 걸리는 시각"></input>
        <input placeholder="대중 교통으로 걸리는 시각"></input>
      </TransferTimeSection>
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
