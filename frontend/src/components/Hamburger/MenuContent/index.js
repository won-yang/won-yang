import React from 'react';
import PropTypes from 'prop-types';

const HamburgerMenuContent = (props) => {
  return (
    <div>
      <div>닉네임</div>
      <div>
        <ul>
          <li>내가 쓴 글</li>
          <li>내 정보 수정</li>
          <li>글 작성</li>
          <li>로그아웃</li>
        </ul>
      </div>
    </div>
  );
};

HamburgerMenuContent.propTypes = {};

export default HamburgerMenuContent;
