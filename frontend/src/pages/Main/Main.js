import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Header from "components/Header/Header";
import PlacePostList from "components/PlacePostList/PostList";
import PostFilter from "components/PlacePostList/PostFilter/PostFilter";
import { getPostItem } from "utils/api";
import { BASE_URL, END_POINT } from "utils/constants/request";
import useInfiniteScroll from "hooks/useInfiniteScroll";
import Jumbotron from "components/common/Jumbotron";
import MainTemplate from "components/Template/MainTemplate";

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
    /*
    TODO 대학교검색페이지에서 대학교 ID값 pathname으로 전달되면 해당 값 포함해서 API요청보내는 것 추가하기
    */
    if (isIntersect) {
      const response = await getPostItem(BASE_URL + END_POINT.board, {
        page: pageNum,
      });
      console.log(response);

      if (response.post.length === 0) {
        setIsLastPage(true);
      } else {
        setPostData([...postData, ...response.post]);
        setPageNum((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    // loadMorePostItem();
  }, [isIntersect]);
  return (
    <MainTemplate>
      <Jumbotron />
      <ArticleContainer>
        {/* <section className="temp-section">검색 및 공지사항 div</section> */}
        <PostFilter />
        <PlacePostList items={postData} intersectRef={intersectRef} isLastPage={isLastPage} />
      </ArticleContainer>
    </MainTemplate>
  );
};

MainPage.propTypes = {};

export default MainPage;

const ArticleContainer = styled.article`
  padding-top: 60px;
  & .temp-section {
    height: 320px;
  }
  & .filtered-bar {
    height: 50px;
  }
  background-color: aliceblue;
`;
