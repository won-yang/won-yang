import React from "react";
import PropTypes from "prop-types";
import MainTemplate from "components/Template/MainTemplate";
import styled from "styled-components";
import { ReactComponent as AuthIcon } from "assets/medal.svg";
import Carousel from "components/common/Carousel";
import { device } from "styles/media";
import OptionBadge from "components/common/OptionBadge";

const PostDetailPage = (props) => {
  return (
    <PostDetailTemplate>
      <Carousel />
      <PostDetailContainer>
        <AuthBadgeWrapper>
          <AuthIcon />
          <AuthText>인증완료사용자</AuthText>
        </AuthBadgeWrapper>
        <PostHeader>
          <PostTitle>농담대까지 10분 거리 원룸 양도합니다</PostTitle>
          <PostDate>작성일자 : 2021. 06.21 13:00</PostDate>
          <UserInteractionButtonContainer>
            <PostBookmark>북</PostBookmark>
            <PostShare>공</PostShare>
          </UserInteractionButtonContainer>
        </PostHeader>

        <PriceInfoList>
          <li>
            보증금<PriceText>300 만원</PriceText>
          </li>
          <li>
            월세<PriceText>30 만원</PriceText>
          </li>
          <li>
            관리비
            <PriceText>
              5 만원
              <PriceSubText>(전기세, 수도세, 가스비 포함)</PriceSubText>
            </PriceText>
          </li>
        </PriceInfoList>
        <div>
          <p>7개월 정도 살았고 방을 비울일이 생겨 양도합니다. 카카오톡 링크로 문의주세요.</p>
        </div>
        <div>
          <h1>연락처</h1>
          <a href="open.kakao/123123">open.kakao/123123</a>
        </div>
        <PostAddress>
          <h1>주소</h1>
          <PostAddressText>농담시 농담구 농담로</PostAddressText>
          <span>*개인정보 보호를 위해 상세주소는 알려드리지 않습니다.</span>
        </PostAddress>
        <PostBuildingInfoTable>
          <tr>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <TableRowTitle>계약만료일</TableRowTitle>
            <TableRowInfo>2019년 2월 3일</TableRowInfo>
          </tr>
          <tr>
            <TableRowTitle>입주가능일</TableRowTitle>
            <TableRowInfo>2018년 7월 8일</TableRowInfo>
          </tr>
          <tr>
            <TableRowTitle>건물 층수</TableRowTitle>
            <TableRowInfo>총 5층 중에 2층</TableRowInfo>
          </tr>
          <tr>
            <TableRowTitle>건물 구조</TableRowTitle>
            <TableRowInfo>단독 주택</TableRowInfo>
          </tr>
          <tr>
            <TableRowTitle>방의 구조</TableRowTitle>
            <TableRowInfo>투룸</TableRowInfo>
          </tr>
          <tr>
            <TableRowTitle>창의 방향</TableRowTitle>
            <TableRowInfo>남향</TableRowInfo>
          </tr>
          <tr>
            <TableRowTitle>힉교까지의 거리</TableRowTitle>
            <TableRowInfo>도보로 10분</TableRowInfo>
          </tr>
        </PostBuildingInfoTable>
        <div>
          <h1>옵션</h1>
          <OptionBadge>인터넷</OptionBadge>
        </div>
      </PostDetailContainer>
    </PostDetailTemplate>
  );
};

PostDetailPage.propTypes = {};

export default PostDetailPage;

const PostDetailTemplate = styled(MainTemplate)`
  padding-top: 100px;
`;

const PostTitle = styled.span`
  font-size: 1.5em;
  font-weight: bold;
  display: block;
`;

const AuthBadgeWrapper = styled.div`
  & > svg {
    width: 25px;
    height: 25px;
  }
`;

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

const PostHeader = styled.div`
  /* display: flex; */
  /* justify-content: space-between; */
`;

const PostDate = styled.span`
  font-size: 0.8em;
  color: ${({ theme }) => theme.fontGrayColor};
`;

const UserInteractionButtonContainer = styled.div`
  float: right;
`;

const PostBookmark = styled.button``;

const PostShare = styled.button``;

const PriceInfoList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-top: 1px solid ${({ theme }) => theme.fontlightGrayColor};
  border-bottom: 1px solid ${({ theme }) => theme.fontlightGrayColor};
`;

const PriceText = styled.span`
  display: block;
  color: ${({ theme }) => theme.blueColor};
`;

const PriceSubText = styled.span`
  font-size: 0.7em;
`;

const PostAddress = styled.div`
  & span:last-child {
    color: ${({ theme }) => theme.darkRedColor};
    font-size: ${({ theme }) => theme.fontSize.badgeFontSize};
  }
`;
const PostAddressText = styled.span`
  display: block;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.middleFontSize};
`;

const PostBuildingInfoTable = styled.table`
  width: 100%;
  border-top: 3px solid ${({ theme }) => theme.fontlightGrayColor};
  border-bottom: 3px solid ${({ theme }) => theme.fontlightGrayColor};
  & td {
    padding: 15px 0 15px 0;
  }

  & tr + tr {
    border-top: 1px solid ${({ theme }) => theme.fontlightGrayColor};
  }
`;

const TableRowTitle = styled.td`
  color: ${({ theme }) => theme.fontGrayColor};
`;

const TableRowInfo = styled.td`
  font-weight: bold;
`;
