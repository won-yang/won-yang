import React from "react";
import PropTypes from "prop-types";

const PageOne = (props) => {
  return (
    <div>
      <h2>보증금과 월세, 관리비, 납부금에 대한 정보를 입력해주세요.</h2>
      <p>
        관리비는 없을 시 빈칸으로 두어도 되며, 납부금이 월세에 포함된다면 버튼을
        눌러 활성화 시켜주세요. *표시가 된 항목은 필수 입력 항목입니다.
      </p>
      <h3>보증금*</h3>
      <input type='text' placeholder='만원'></input>
      <h3>월세*</h3>
      <input type='text' placeholder='만원'></input>
      <h3>관리비*</h3>
      <input type='text' placeholder='0 만원'></input>
      <h3>월세에 포함*</h3>
      <div>
        <button>전기세</button>
        <button>수도세</button>
        <button>가스비</button>
      </div>
    </div>
  );
};

PageOne.propTypes = {};

export default PageOne;
