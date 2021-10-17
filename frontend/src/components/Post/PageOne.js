import React from "react";
import PropTypes from "prop-types";

const PageOne = (props) => {
  return (
    <div>
      <h2>제목과 연락처를 입력해주세요.</h2>
      <p>
        글을 대략적으로 알릴 제목과, 사용자가 연락을 취할 오픈 카카오톡 링크나
        전화번호를 입력해주세요.
      </p>
      <h3>제목*</h3>
      <input type='text' placeholder='제목을 입력해주세요.'></input>
      <h3>연락처*</h3>
      <input type='text' placeholder='연락처를 입력해주세요.'></input>
    </div>
  );
};

PageOne.propTypes = {};

export default PageOne;
