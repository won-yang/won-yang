import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import usePathname from "hooks/usePathname";

import Carousel from "components/common/Carousel";
import PostDetailHeader from "components/PostDetail/PostDetailHeader";
import MonthlyChargeList from "components/PostDetail/MonthlyChargeList";
import RoomAddress from "components/PostDetail/RoomAddress";
import PostDescription from "components/PostDetail/PostDescription";
import OwnerContactInfo from "components/PostDetail/OwnerContactInfo";
import BuildingInfoTable from "components/PostDetail/BuildingInfoTable";
import RoomOptionList from "components/PostDetail/RoomOptionList";
import { selectPostWrite } from "store/Postwrite/PostwriteSlice";
import { device } from "styles/media";
import { PrevNextBtn, SpaceBetween } from "./Title";
import LabelWithText from "./LabelWithTextListItem";

const WritedContentCheck = (props) => {
  const state = useSelector(selectPostWrite);
  const { getWritePhase } = usePathname();

  const getPrevPhase = () => {
    return parseInt(getWritePhase(), 10) - 1;
  };
  return (
    <>
      <Carousel imagePaths={""} />
      <WritedContentContainer>
        <PhaseOneContainer>
          <LabelWithText titleText="제목" text={state.title} />
          <LabelWithText titleText="연락처" text={state.contact} />
        </PhaseOneContainer>
        <MonthlyChargeList
          monthlyRent={state.monthlyRent}
          deposit={state.deposit}
          includingTax={state.includingTax}
        />
        <RoomAddress
          isPosted={false}
          address={state.address}
          address_detail={state.address_detail}
        />
        <PostDescription contents={state.contents} />
        <BuildingInfoTable
          totalFloor={state.total_floor}
          currentFloor={state.curren_floor}
          buildType={state.build_type}
          walkingTime={state.walking_time}
          windowSide={state.window_side}
          roomType={state.room_type}
        />
        <RoomOptionList
          homeAppliances={state.homeAppliances}
          etcOptions={state.etcOptions}
          furnitures={state.furnitures}
        />
        <SpaceBetween>
          <Link to={`/write/${getPrevPhase()}`}>
            <PrevNextBtn>{`< `} 이전단계</PrevNextBtn>
          </Link>
          <PrevNextBtn>작성완료 {` >`}</PrevNextBtn>
        </SpaceBetween>
      </WritedContentContainer>
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
