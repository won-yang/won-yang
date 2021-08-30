import React from "react";
import styled from "styled-components";

const Jumbotron = () => {
  return (
    <Container>
      <IntroductionText>
        원양에서 원룸을 양도하거나 양도받아보세요!
      </IntroductionText>
    </Container>
  );
};

export default Jumbotron;

const Container = styled.section``;

const IntroductionText = styled.span``;
