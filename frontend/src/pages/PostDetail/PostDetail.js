import React from "react";
import MainTemplate from "components/Template/MainTemplate";
import styled from "styled-components";
import { ReactComponent as AuthIcon } from "assets/medal.svg";
import Carousel from "components/common/Carousel";
import { device } from "styles/media";

import image1 from "assets/dummyImg/dmy1.jpeg";
import image2 from "assets/dummyImg/dmy2.jpeg";
import image3 from "assets/dummyImg/dmy3.jpeg";
import image4 from "assets/dummyImg/dmy4.jpeg";
import image5 from "assets/dummyImg/dmy5.jpeg";
import IconContainer from "components/Icon/IconContainer";
import PostDetailHeader from "components/PostDetail/PostDetailHeader";
import MonthlyChargeList from "components/PostDetail/MonthlyChargeList";
import BuildingInfoTable from "components/PostDetail/BuildingInfoTable";
import RoomOptionList from "components/PostDetail/RoomOptionList";
import RoomAddress from "components/PostDetail/RoomAddress";
import OwnerContactInfo from "components/PostDetail/OwnerContactInfo";
import PostDescription from "components/PostDetail/PostDescription";

const PostDetailPage = () => {
  const imagePaths = [image1, image2, image3];

  return (
    <PostDetailTemplate>
      <Carousel imagePaths={imagePaths} />
      <PostDetailContainer>
        <AuthBadgeContainer>
          <IconContainer widthSize="25px" heightSize="25px">
            <AuthIcon />
          </IconContainer>
          <AuthText>인증완료사용자</AuthText>
        </AuthBadgeContainer>
        <PostDetailHeader />
        <MonthlyChargeList />
        <RoomAddress />
        <PostDescription />
        <OwnerContactInfo />
        <BuildingInfoTable />
        <RoomOptionList />
      </PostDetailContainer>
    </PostDetailTemplate>
  );
};

PostDetailPage.propTypes = {};

export default PostDetailPage;

const PostDetailTemplate = styled(MainTemplate)`
  padding-top: 100px;
`;

const AuthBadgeContainer = styled.div``;

const AuthText = styled.span`
  display: inline;
  height: 25px;
  font-size: 1em;
  font-weight: bold;
`;

const PostDetailContainer = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: ${({ theme }) => theme.fontSize.badgeFontSize};
  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.middleFontSize};
  }
`;
