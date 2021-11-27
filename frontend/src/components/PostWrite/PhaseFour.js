import Button from "components/common/Button";
import Input from "components/common/Input";
import React from "react";
import styled, { css } from "styled-components";
import DaumPostcode from "react-daum-postcode";
import useAnimation from "hooks/useAnimation";

import { useDispatch, useSelector } from "react-redux";
import {
  selectPostWrite,
  setAddress,
  setAddressDetail,
  setAddressVisible,
  setBuildingType,
  setBusTime,
  setCurrentFloor,
  setRoomType,
  setTotalFloor,
  setWalkingTime,
  setWindowSide,
} from "store/Postwrite/PostwriteSlice";
import InputWithLabel from "components/common/InputWithLabel";
import PrevNext from "./common/PrevNext";
import AddressModal from "./Four/AddressModal";
import { Content, Title } from "./common";

const PhaseFour = (props) => {
  const dispatch = useDispatch();
  const { address, address_detail, is_address_visible, window_side, walking_time, bus_time } =
    useSelector(selectPostWrite);

  const handleChangeBuildingType = (e) => {
    const { value } = e.target;
    dispatch(setBuildingType(value));
  };
  const handleChangeRoomType = (e) => {
    const { value } = e.target;
    dispatch(setRoomType(value));
  };
  const handleChangeWindowSide = (e) => {
    const { value } = e.target;
    if (value) {
      dispatch(setWindowSide(value));
    }
  };
  const { isMounted, setIsMounted } = useAnimation({ delay: 600 });
  const handleOpenModal = () => {
    setIsMounted(true);
  };
  return (
    <Section>
      <Title>양도하려는 방의 위치와 건물의 정보를 입력해주세요</Title>
      <Content>
        타사용자에겐 대략적인 주소만 보여집니다.(예: ~로, ~길 까지)
        <br /> 주소를 상세하게 보여주고 싶다면 주소 오픈을 체크해주세요.
        <br />
        *표시가 된 항목은 필수 입력 항목입니다.
      </Content>
      <AddressSection>
        {isMounted && <AddressModal setIsMounted={setIsMounted} />}
        <InputWithLabel
          columnDirection={true}
          labelText="주소"
          value={address}
          onClick={handleOpenModal}
        />
        <InputWithLabel
          columnDirection={true}
          labelText="상세주소"
          onChange={(e) => dispatch(setAddressDetail(e.target.value))}
          value={address_detail}
        />
        <InputWithLabel
          type="checkbox"
          checked={is_address_visible}
          onChange={(e) => dispatch(setAddressVisible(e.target.value))}
          labelText="주소 오픈"
        />
      </AddressSection>
      <BuildingFloorSection>
        <InputDescription>건물 층수</InputDescription>
        <Input
          placeholder="현재 층을 입력"
          onChange={(e) => dispatch(setCurrentFloor(e.target.value))}
        ></Input>
        <Input
          placeholder="건물 전체 층 입력"
          onChange={(e) => dispatch(setTotalFloor(e.target.value))}
        ></Input>
      </BuildingFloorSection>
      <BuildingStructureSection>
        <InputDescription>건물 구조</InputDescription>
        <CheckboxContainer onChange={handleChangeBuildingType}>
          <Input type="radio" value="APARTMENT" id="APARTMENT" name="buildingType" />
          <label htmlFor="APARTMENT">아파트</label>
          <Input type="radio" value="DETACHED_HOUSE" id="DETACHED_HOUSE" name="buildingType" />
          <label htmlFor="DETACHED_HOUSE">단독 주택</label>
          <Input type="radio" value="ROW_HOUSE" id="ROW_HOUSE" name="buildingType" />
          <label htmlFor="ROW_HOUSE">다세대 주택</label>
          <Input type="radio" value="VILLA" id="VILLA" name="buildingType" />
          <label htmlFor="VILLA">빌라</label>
          <Input type="radio" value="OFFICETEL" id="OFFICETEL" name="buildingType" />
          <label htmlFor="OFFICETEL">오피스텔</label>
          <Input type="radio" value="ETC" id="ETC" name="buildingType" />
          <label htmlFor="ETC">기타</label>
          <Input placeholder="직접 입력" />
        </CheckboxContainer>
      </BuildingStructureSection>
      <RoomStructureSection>
        <InputDescription>방의 구조</InputDescription>
        <CheckboxContainer onChange={handleChangeRoomType}>
          <Input
            type="radio"
            value="STUDIO_WITH_SEPERATION"
            id="STUDIO_WITH_SEPERATION"
            name="roomType"
          />
          <label htmlFor="STUDIO_WITH_SEPERATION">분리형 원룸</label>
          <Input type="radio" value="STUDIO" id="STUDIO" name="roomType" />
          <label htmlFor="STUDIO">일체형 원룸</label>
          <Input type="radio" value="LOFT" id="LOFT" name="roomType" />
          <label htmlFor="LOFT">복층 원룸</label>
          <Input type="radio" value="TWO_BEDROOM" id="TWO_BEDROOM" name="roomType" />
          <label htmlFor="TWO_BEDROOM">투룸</label>
          <Input type="radio" value="THREE_BEDROOM" id="THREE_BEDROOM" name="roomType" />
          <label htmlFor="THREE_BEDROOM">쓰리룸</label>
          <Input type="radio" value="ROOM_TYPE_ETC" id="ROOM_TYPE_ETC" name="roomType" />
          <label htmlFor="ROOM_TYPE_ETC">기타</label>
          <Input placeholder="직접 입력" />
        </CheckboxContainer>
      </RoomStructureSection>

      <WindowDirectionSection>
        <InputDescription>창의 방향</InputDescription>
        <WindowDirectionButtonContainer onClick={handleChangeWindowSide}>
          <WindowDirectionButton
            value="NORTH"
            isFocused={window_side === "NORTH" && true}
            id="NORTH"
          >
            남향
          </WindowDirectionButton>
          <WindowDirectionButton value="SOUTH" isFocused={window_side === "SOUTH"} id="SOUTH">
            서향
          </WindowDirectionButton>
          <WindowDirectionButton value="EAST" isFocused={window_side === "EAST"} id="EAST">
            북향
          </WindowDirectionButton>
          <WindowDirectionButton value="WEST" isFocused={window_side === "WEST"} id="WEST">
            동향
          </WindowDirectionButton>
        </WindowDirectionButtonContainer>
      </WindowDirectionSection>

      <TransferTimeSection>
        <InputDescription>학교까지의 거리,,음..필여한데이터인가</InputDescription>
        <Input
          value={walking_time}
          onChange={(e) => dispatch(setWalkingTime(e.target.value))}
          placeholder="도보로 걸리는 시각"
        ></Input>
        <Input
          value={bus_time}
          onChange={(e) => dispatch(setBusTime(e.target.value))}
          placeholder="대중 교통으로 걸리는 시각"
        ></Input>
      </TransferTimeSection>
      <PrevNext />
    </Section>
  );
};

PhaseFour.propTypes = {};

export default PhaseFour;

const AddressSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  ${(props) =>
    props.isFocused &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
    `}
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;

const CheckboxContainer = styled.div`
  & label {
    padding-right: 15px;
  }
`;
const Section = styled.section`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
