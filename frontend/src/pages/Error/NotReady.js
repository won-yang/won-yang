import useNotReady from "hooks/useNotReady";
import React from "react";
import styled from "styled-components";

const NotReady = () => {
  const { goBack } = useNotReady();

  return (
    <NotReadyBody>
      <section>준비중인 기능입니다.</section>
      <MarginBox />
      <button onClick={goBack}>뒤로가기</button>
    </NotReadyBody>
  );
};

NotReady.propTypes = {};

export default NotReady;

const NotReadyBody = styled.section`
  width: 100%;

  position: absolute;
  top: 50%;

  transform: translateY(-50%);

  text-align: center;
`;

const MarginBox = styled.section`
  height: 32px;
`;
