import React from "react";
import styled from "styled-components";
import { device } from "styles/media";
import { Link } from "react-router-dom";
import { ReactComponent as MapSearchBtnIcon } from "assets/mapsearchIcon.svg";
import { ReactComponent as ConditionSearchBtnIcon } from "assets/condisearchIcon.svg";
import { ReactComponent as CautionIcon } from "assets/sorrySheep.svg";
import { ReactComponent as GuideIcon } from "assets/guidicon.svg";
import { ReactComponent as NoticeIcon } from "assets/noticesheep.svg";

const Jumbotron = () => {
  return (
    <Container>
      <IntroductionText>원양에서 원룸을 양도하거나 양도받아보세요!</IntroductionText>
      <ButtonContainer>
        <SearchButtonContainer>
          <SearchWrapperButton>
            <span>지도에서 검색</span>
            <Link className="link" to="/mapsearch" />
            <MapSearchBtnIcon />
          </SearchWrapperButton>
          <SearchWrapperButton>
            <span>원하는 조건으로 검색</span>
            <Link className="link" to="conditionsearch" />
            <ConditionSearchBtnIcon />
          </SearchWrapperButton>
        </SearchButtonContainer>
        <NoticeButtonContainer>
          <button>
            <span>양도시 주의사항</span>
          </button>
          <button>원양이용방법</button>
          <button>
            기타 공지사항
            <NoticeIcon />
          </button>
        </NoticeButtonContainer>
      </ButtonContainer>
    </Container>
  );
};

export default Jumbotron;
const SearchWrapperButton = styled.button`
  width: 100%;
  min-height: 100px;
  position: relative;
  left: 0;
  overflow: hidden;
  & span {
    padding: 5px;
    color: white;
    font-size: 1.2em;
    position: absolute;
    left: 0;
    top: 0;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 180px;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;
const NoticeButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  gap: 5px;
  margin-top: 5px;
  @media ${device.tablet} {
    flex-direction: column;
    margin: 0;
  }
  & button {
    flex: 1;
    background-color: white;
    border: 1px solid #7d7d7d;
  }
  & svg {
  }
`;

const SearchButtonContainer = styled.div`
  display: flex;
  flex: 3;
  gap: 5px;
  margin-right: 0;
  & button {
    background-color: ${({ theme }) => theme.primary};
  }
  @media ${device.tablet} {
    margin-right: 5px;
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  margin: 0 auto;
  width: 90%;
  & button {
    border-radius: 5px;
  }
  & svg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 15px;
  }
  & > span {
    line-height: 50px;
    font-size: ${(props) => props.theme.middleFontSize};
  }
  & a {
    display: inline-block;
    width: 100%;
    z-index: 1;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  /* 768 ~ 1280까지 width를 고정시켜야함.620px */
  @media ${device.tablet} {
    width: 620px;
    /* flex-direction: row; */
  }
  @media ${device.desktop} {
    width: 1080px;
  }
`;
const IntroductionText = styled.span``;
