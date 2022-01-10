import useNotReady from "hooks/useNotReady";
import React from "react";
import styled from "styled-components";

import notReadyImage from "../../assets/not-ready-image.png";

const NotReady = () => {
  const { goBack } = useNotReady();

  return (
    <NotReadyBody>
      <NotReadyImg src={notReadyImage} />
      <section>
        <Button onClick={goBack}>
          <ButtonText>뒤로가기</ButtonText>
        </Button>
      </section>
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

const NotReadyImg = styled.img`
  width: 100%;
  max-width: 512px;
`;

const Button = styled.button`
  width: 8rem;
  height: 3rem;
  border-radius: 10px;

  cursor: pointer;
`;

const ButtonText = styled.span`
  font-size: 1.25rem;
`;
