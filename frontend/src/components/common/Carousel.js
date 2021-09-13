import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import image1 from "assets/dummyImg/dmy1.jpeg";
import image2 from "assets/dummyImg/dmy2.jpeg";
import image3 from "assets/dummyImg/dmy3.jpeg";
import image4 from "assets/dummyImg/dmy4.jpeg";
import image5 from "assets/dummyImg/dmy5.jpeg";
import useCarousel from "hooks/useCarousel";

/*
 * imagePaths === 이미지경로를 담은 Array
 */

const Carousel = ({ imagePaths }) => {
  const ImagePaths = [image1, image2, image3];
  const {
    handleNextImage,
    handlePrevImage,
    prevImageIndex,
    currImageIndex,
    nextImageIndex,
    rightSlide,
    leftSlide,
  } = useCarousel(ImagePaths);
  return (
    <Container>
      <PrevButton onClick={handlePrevImage}>p</PrevButton>
      <NextButton onClick={handleNextImage}>n</NextButton>
      <ImageWrapper>
        {ImagePaths.length > 2 && <PrevImage src={ImagePaths[prevImageIndex]} />}
        <CurrImage src={ImagePaths[currImageIndex]} />
        {ImagePaths.length > 2 && <NextImage src={ImagePaths[nextImageIndex]} />}
      </ImageWrapper>
      <ImageCountNoti>{currImageIndex}</ImageCountNoti>
    </Container>
  );
};

Carousel.propTypes = {};

export default Carousel;

const Container = styled.div`
  position: relative;
`;
const ImageCountNoti = styled.span`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-100%, 0);
  color: white;
  font-size: 30px;
`;

const PrevButton = styled.button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(10px, -100%);
`;
const NextButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-10px, -100%);
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

const PrevImage = styled.img`
  position: absolute;
  transition: 0.2s;
  left: 0%;
  top: 45px;
  width: 100%;
  height: 100%;
  max-height: 400px;
  overflow-y: hidden;
  opacity: 0.4;
  z-index: -2;
`;
const NextImage = styled.img`
  position: absolute;
  right: 0%;
  top: 45px;
  width: 100%;
  height: 100%;
  max-height: 400px;
  opacity: 0.4;
  overflow-y: hidden;
  z-index: -2;
`;
