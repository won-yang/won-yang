import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUniversity } from "store/University/UniversitySlice";
import { useHistory } from "react-router";

import ImageCarousel from "components/common/ImageCarousel";
import usePathname from "hooks/usePathname";
import { selectUser } from "store/User/userSlice";
import { getImageUploadURL, postUploadImageUrl, postWrite } from "utils/api";
import MonthlyChargeList from "components/PostDetail/MonthlyChargeList";
import RoomAddress from "components/PostDetail/RoomAddress";
import PostDescription from "components/PostDetail/PostDescription";
import BuildingInfoTable from "components/PostDetail/BuildingInfoTable";
import RoomOptionList from "components/PostDetail/RoomOptionList";
import { selectPostWrite } from "store/Postwrite/PostwriteSlice";
import { device } from "styles/media";
import { PrevNextBtn, SpaceBetween } from "./common";
import LabelWithText from "./common/LabelWithTextListItem";

const WritedContentCheck = (props) => {
  const state = useSelector(selectPostWrite);
  const { getWritePhase } = usePathname();
  const { userInfo } = useSelector(selectUser);
  const getPrevPhase = () => {
    return parseInt(getWritePhase(), 10) - 1;
  };
  const history = useHistory();
  const onSubmitHandler = async () => {
    try {
      const getUploadUrlResponse = await getImageUploadURL();
      console.log(getUploadUrlResponse.uploadUrl);
      const res = await postUploadImageUrl(getUploadUrlResponse.uploadUrl, state.images.files);
      const writePostResponse = await postWrite(userInfo.campus_id, state, res.imageURL);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <ImageCarousel imagePaths={state.images.urls} />
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
