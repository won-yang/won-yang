import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { device } from "styles/media";
import Header from "components/Header";
import PlacePostList from "components/PlacePostList";
import { getPostItem } from "utils/api";
import { BASE_URL } from "utils/constants/request";
import PostFilter from "components/PlacePostList/PostFilter";

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
        <PostFilter />
        <PlacePostList items={postData} />
      </ArticleContainer>
    </>
  );
};

MainPage.propTypes = {};

export default MainPage;

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
