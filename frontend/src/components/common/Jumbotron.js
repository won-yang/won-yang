import React from "react";
import styled from "styled-components";
import { device } from "styles/media";
import { Link } from "react-router-dom";

const Jumbotron = () => {
  return (
    <Container>
      <IntroductionText>원양에서 원룸을 양도하거나 양도받아보세요!</IntroductionText>
      <div>
        <ul>
          <li>
            <Link to="/mapsearch">지도에서 검색</Link>
          </li>
          <li>
            <Link to="conditionsearch">원하는 조건으로 검색</Link>
          </li>
        </ul>
        <div>
          <button>양도시 주의사항</button>
          <button>원양이용방법</button>
          <button>기타 공지사항</button>
        </div>
      </div>
    </Container>
  );
};

export default Jumbotron;

const Container = styled.section`
  max-width: 1080px;
  margin: 0 auto;
  width: 90%;
  height: 50px;
  margin: 0 auto;

  & > span {
    line-height: 50px;
    font-size: ${(props) => props.theme.middleFontSize};
  }

  /* 768 ~ 1280까지 width를 고정시켜야함.620px */
  @media ${device.tablet} {
    width: 620px;
  }
  @media ${device.desktop} {
    width: 1080px;
  }
`;
const IntroductionText = styled.span``;
