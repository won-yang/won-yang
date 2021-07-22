import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import { ArticleContainer } from './style';

const MainPage = (props) => {
  return (
    <>
      <Header></Header>
      <ArticleContainer>
        <section>검색 및 공지사항 div</section>
        <section>필터링 버튼</section>
        <section>게시글 리스트</section>
      </ArticleContainer>
    </>
  );
};

MainPage.propTypes = {};

export default MainPage;
