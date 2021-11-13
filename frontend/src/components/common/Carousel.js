import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as Arrow } from "assets/arrow.svg";
import useCarousel from "hooks/useCarousel";
import IconContainer from "components/Icon/IconContainer";

/*
 * imagePaths === 이미지경로를 담은 Array
 */

const Carousel = ({ imagePaths }) => {
  const { handleNextImage, handlePrevImage, currImageIndex } = useCarousel(imagePaths);
  return (
    <Container>
      <PrevButton onClick={handlePrevImage}>
        <Arrow />
      </PrevButton>
      <NextButton onClick={handleNextImage}>
        <Arrow />
      </NextButton>
      <ImageWrapper>
        <CurrImage src={imagePaths[currImageIndex]} />
      </ImageWrapper>
      <ImageCountNoti>
        {currImageIndex + 1}/{imagePaths.length}
      </ImageCountNoti>
    </Container>
  );
};

Carousel.propTypes = {};

export default Carousel;

const Container = styled.div`
  position: relative;
  max-width: 640px;
  margin: 0 auto;
`;
const ImageCountNoti = styled.span`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translate(-100%, 0);
  color: white;
  font-size: 16px;
  border-radius: 8px;
  padding: 3px;
  opacity: 0.8;
  background-color: ${({ theme }) => theme.colors.gray};
`;

const PrevButton = styled.button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(10px, -50%);
  border: none;
  background: unset;
  cursor: pointer;
  & svg {
    transition: 0.2s;
    transform: rotate(180deg);
    width: 2em;
    height: 2em;
    &:hover {
      width: 2.2em;
      height: 2.2em;
    }
  }
`;
const NextButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-10px, -50%);
  border: none;
  background: unset;
  cursor: pointer;
  & svg {
    transition: 0.2s;
    width: 2em;
    height: 2em;
    &:hover {
      width: 2.2em;
      height: 2.2em;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  & img {
    max-width: 640px;
  }
`;
const CurrImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 480px;
  object-fit: contain;
  overflow: hidden;
  transition: 0.6s;
`;
