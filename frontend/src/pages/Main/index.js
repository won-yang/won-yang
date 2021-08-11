import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { device } from "styles/media";
import Header from "components/Header";
import PlacePostList from "components/PlacePostList";
import { getPostItem } from "utils/api";
import { BASE_URL } from "utils/constants/request";

const MainPage = (props) => {
  const [postData, setPostData] = useState([]);

  useEffect(async () => {
    const response = await getPostItem(BASE_URL);
    setPostData([...response.post]);
    return () => console.log("cleanup");
  }, []);
  return (
    <>
      <Header />
      <ArticleContainer>
        <section className='temp-section'>검색 및 공지사항 div</section>
        <section className='filtered-bar'>필터링 버튼</section>
        <ListWrapper>
          <PlacePostList items={postData} />
        </ListWrapper>
      </ArticleContainer>
    </>
  );
};

MainPage.propTypes = {};

export default MainPage;

const ListWrapper = styled.section`
  display: grid;
  justify-content: center;
  max-width: 1280px;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 300px);
    justify-self: center;
    align-self: center;
  }
  @media ${device.desktop} {
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
`;
