import React, { useEffect, useState } from "react";
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
import { useLocation } from "react-router";
import { getPostItem } from "utils/api";
import { ETC_OPTIONS, FURNITURES, HOME_APPLIANCES } from "utils/constants";

const PostDetailPage = () => {
  const imagePaths = [image1, image2, image3];
  const [postData, setPostData] = useState(null);
  const location = useLocation();
  const [postId, setPostId] = useState(parseInt(location.pathname.split("/").pop(), 10));

  const getPostInfo = async () => {
    const res = await getPostItem(postId);
    const homeAppliances = [];
    const furnitures = [];
    const etcOptions = [];
    for (let i = 0; i < res.post_info.option.length; i++) {
      if (HOME_APPLIANCES.filter((item) => item.id === res.post_info.option[i]).length > 0) {
        homeAppliances.push(
          ...HOME_APPLIANCES.filter((item) => item.id === res.post_info.option[i]).map((item) => ({
            ...item,
            isSelected: true,
          })),
        );
      }
      if (FURNITURES.filter((item) => item.id === res.post_info.option[i]).length > 0) {
        furnitures.push(
          ...FURNITURES.filter((item) => item.id === res.post_info.option[i]).map((item) => ({
            ...item,
            isSelected: true,
          })),
        );
      }
      if (ETC_OPTIONS.filter((item) => item.id === res.post_info.option[i]).length > 0) {
        etcOptions.push(
          ...ETC_OPTIONS.filter((item) => item.id === res.post_info.option[i]).map((item) => ({
            ...item,
            isSelected: true,
          })),
        );
      }
    }
    setPostData({
      ...res.post_info,
      homeAppliances,
      furnitures,
      etcOptions,
    });
  };
  useEffect(() => {
    getPostInfo();
  }, []);

  return (
    <PostDetailTemplate>
      {postData && (
        <>
          <Carousel imagePaths={imagePaths} />
          <PostDetailContainer>
            <AuthBadgeContainer>
              <IconContainer widthSize="25px" heightSize="25px">
                <AuthIcon />
              </IconContainer>
              <AuthText>인증완료사용자</AuthText>
            </AuthBadgeContainer>
            <PostDetailHeader title={postData.title} created_date={postData.created_at} />
            <MonthlyChargeList
              deposit={postData.deposit}
              monthlyRent={postData.monthly_rent}
              includingTax={{
                electricity: postData.electricity,
                gas: postData.gas,
                water: postData.water,
              }}
              serviceFee={postData.service_fee}
            />
            <RoomAddress
              address={postData.address}
              isPosted={postData.is_address_visible}
              addressDetail={postData.address_detail}
            />
            <PostDescription contents={postData.content} />
            <OwnerContactInfo contact={postData.contact} />
            <BuildingInfoTable
              contractExpireDate={postData.contract_expire_date}
              moveInDate={postData.move_in_date}
              currentFloor={postData.current_floor}
              totalFloor={postData.current_floor}
              buildType={postData.building_type}
              roomType={postData.room_type}
              busTime={postData.bus_time}
              windowSide={postData.window_side}
              walkingTime={postData.walking_time}
            />
            <RoomOptionList
              homeAppliances={postData?.homeAppliances}
              etcOptions={postData?.etcOptions}
              furnitures={postData?.furnitures}
            />
          </PostDetailContainer>
        </>
      )}
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
