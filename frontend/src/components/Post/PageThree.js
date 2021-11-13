import React from "react";
import PropTypes from "prop-types";

const PageThree = (props) => {
  return (
    <div>
      <h2>계약이 만료되는 날짜와 입주가능한 날짜를 선택해주세요. </h2>
      <p>
        만료되는 날짜를 정확히 모른다면, 대략적인 날짜로 해주세요. *표시가 된
        항목은 필수 입력 항목입니다.
      </p>
      <h3>계약 만료일*</h3>
      {/* value값 today 날짜로 받아와야함 */}
      <input type='date'></input>
      <h3>입주 가능일*</h3>
      {/* value값 today 날짜로 받아와야함 */}
      <input type='date'></input>
    </div>
  );
};

PageThree.propTypes = {};

export default PageThree;
