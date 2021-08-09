import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { device } from "styles/media";
import Header from "components/Header";
import PlacePostList from "components/PlacePostList";

const MainPage = (props) => {
  return (
    <>
      <Header />
      <ArticleContainer>
        <section className='temp-section'>검색 및 공지사항 div</section>
        <section className='filtered-bar'>필터링 버튼</section>
        <ListWrapper>
          <PlacePostList></PlacePostList>
        </ListWrapper>
      </ArticleContainer>
    </>
  );
};

MainPage.propTypes = {};

export default MainPage;

const ListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ArticleContainer = styled.article`
  padding-top: 60px;
  max-width: 1280px;
  width: 90%;
  margin: 0 auto;
  & .temp-section {
    height: 320px;
  }
  & .filtered-bar {
    height: 50px;
  }
  background-color: aliceblue;
  font-size: ${(props) => props.theme.mobileFontSize};

  @media ${device.tablet} {
    font-size: ${(props) => props.theme.tabletFontSize};
  }
  @media ${device.desktop} {
    font-size: ${(props) => props.theme.pcFontSize};
  }
`;
