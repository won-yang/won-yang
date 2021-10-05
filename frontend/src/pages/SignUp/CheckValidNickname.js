import React from "react";
import { IsValid } from "./style";

const CheckValidNickname = (props) => {
  const { isValidNickname } = props;

  return (
    <IsValid isValidNickname={isValidNickname}>
      {isValidNickname !== undefined &&
        (isValidNickname
          ? "좋은 닉네임이군요!"
          : "유효하지 않은 닉네임입니다.")}
    </IsValid>
  );
};

export default CheckValidNickname;
