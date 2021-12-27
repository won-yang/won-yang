import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUniversity } from "store/University/UniversitySlice";

import usePathname from "hooks/usePathname";
import { useHistory } from "react-router";
import { postWrite } from "utils/api";
import Carousel from "components/common/Carousel";
import PostDetailHeader from "components/PostDetail/PostDetailHeader";
import MonthlyChargeList from "components/PostDetail/MonthlyChargeList";
import RoomAddress from "components/PostDetail/RoomAddress";
import PostDescription from "components/PostDetail/PostDescription";
import OwnerContactInfo from "components/PostDetail/OwnerContactInfo";
import BuildingInfoTable from "components/PostDetail/BuildingInfoTable";
import RoomOptionList from "components/PostDetail/RoomOptionList";
import { selectPostWrite } from "store/Postwrite/PostwriteSlice";
import { requestPost } from "utils/HttpMethod";
import { BASE_URL } from "utils/constants/request";
import { device } from "styles/media";
import { PrevNextBtn, SpaceBetween } from "./common";
import LabelWithText from "./common/LabelWithTextListItem";

const WritedContentCheck = (props) => {
  const state = useSelector(selectPostWrite);
  const { getWritePhase } = usePathname();
  const { campusInfo } = useSelector(selectUniversity);
  const getPrevPhase = () => {
    return parseInt(getWritePhase(), 10) - 1;
  };
  const history = useHistory();
  const onSubmitHandler = async () => {
    try {
      const res = await postWrite(campusInfo.campusId, state);
      history.replace(`/main/${campusInfo.campusId}`);

      // const result = await requestPost(`${BASE_URL}/write`, { campus_id: 1, ...resultState });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Carousel imagePaths={state.images.urls} />
      <WritedContentContainer>
        <PhaseOneContainer>
          <LabelWithText titleText="제목" text={state.title || ""} />
          <LabelWithText titleText="연락처" text={state.contact || ""} />
        </PhaseOneContainer>
        <MonthlyChargeList
          monthlyRent={state.monthly_rent}
          deposit={state.deposit}
          serviceFee={state.service_fee}
          includingTax={state.including_tax}
        />
        <RoomAddress
          isPosted={false}
          address={state.address}
          addressDetail={state.address_detail}
        />
        <PostDescription contents={state.contents} />
        <BuildingInfoTable
          moveInDate={state.move_in_date}
          contractExpireDate={state.contract_expire_date}
          totalFloor={state.total_floor}
          currentFloor={state.current_floor}
          buildType={state.building_type}
          walkingTime={state.walking_time}
          busTime={state.bus_time}
          windowSide={state.window_side}
          roomType={state.room_type}
        />
        <RoomOptionList
          homeAppliances={state.homeAppliances}
          etcOptions={state.etcOptions}
          furnitures={state.furnitures}
        />
      </WritedContentContainer>
      <SpaceBetween>
        <Link to={`/write/${getPrevPhase()}`}>
          <PrevNextBtn>{`< `} 이전단계</PrevNextBtn>
        </Link>
        <PrevNextBtn onClick={onSubmitHandler}>작성완료 {` >`}</PrevNextBtn>
      </SpaceBetween>
    </>
  );
};

WritedContentCheck.propTypes = {};

export default WritedContentCheck;

const WritedContentContainer = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: ${({ theme }) => theme.fontSize.badgeFontSize};
  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.middleFontSize};
  }
`;

const PhaseOneContainer = styled.ul`
  display: flex;
  padding: 15px;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  gap: 20px;
`;
