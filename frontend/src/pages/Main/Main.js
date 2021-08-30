import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Header from "components/Header/Header";
import PlacePostList from "components/PlacePostList/PostList";
import PostFilter from "components/PlacePostList/PostFilter/PostFilter";
import { getPostItem } from "utils/api";
import { BASE_URL, END_POINT } from "utils/constants/request";
import useInfiniteScroll from "hooks/useInfiniteScroll";

const MainPage = (props) => {
  const [postData, setPostData] = useState([]);
  /*
   * 넘겨받는데이터(path)로 초기값세팅
   */
  const [pageNum, setPageNum] = useState(1);
  /*
   * page관련부분 hooks로 분리할 것
   */
  const [isLastPage, setIsLastPage] = useState(false);
  const intersectRef = useRef(null);
  const { isIntersect } = useInfiniteScroll(intersectRef, {
    _rootMargin: "200px",
    _threshold: 0.01,
  });
  const loadMorePostItem = async () => {
    if (isIntersect) {
      const response = await getPostItem(BASE_URL + END_POINT.board, {
        page: pageNum,
      });
      if (response.post.length === 0) {
        setIsLastPage(true);
      } else {
        setPostData([...postData, ...response.post]);
        setPageNum((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    loadMorePostItem();
  }, [isIntersect]);
  return (
    <>
      <Header />
      <ArticleContainer>
        <section className='temp-section'>검색 및 공지사항 div</section>
        <PostFilter />
        <PlacePostList
          items={postData}
          intersectRef={intersectRef}
          isLastPage={isLastPage}
        />
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
