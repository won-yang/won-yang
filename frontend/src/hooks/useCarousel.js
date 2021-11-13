import React, { useState } from "react";
import PropTypes from "prop-types";

const useCarousel = (imagePaths) => {
  const ImagePathsLength = imagePaths.length;
  const [currImageIndex, setCurrImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [prevImageIndex, setPrevImageIndex] = useState(ImagePathsLength - 1);
  const [rightSlide, setRightSlide] = useState(false);
  const [leftSlide, setLeftSlide] = useState(false);

  const handlePrevImage = () => {
    setRightSlide(false);
    setLeftSlide(true);
    if (prevImageIndex === 0) {
      setPrevImageIndex(ImagePathsLength - 1);
    } else {
      setPrevImageIndex((prev) => prev - 1);
    }
    if (currImageIndex === 0) {
      setCurrImageIndex(ImagePathsLength - 1);
    } else {
      setCurrImageIndex((prev) => prev - 1);
    }
    setNextImageIndex(currImageIndex);
  };
  const handleNextImage = () => {
    setLeftSlide(false);
    setRightSlide(true);
    setCurrImageIndex((prev) => (prev + 1) % ImagePathsLength);
    if (nextImageIndex === ImagePathsLength - 1) {
      setNextImageIndex(0);
    } else {
      setNextImageIndex((prev) => (prev + 1) % ImagePathsLength);
    }
    setPrevImageIndex(currImageIndex);
    // setTimeout(() => {
    //   setRightSlide(false);
    // }, 2000);
  };
  return {
    handlePrevImage,
    handleNextImage,
    currImageIndex,
    nextImageIndex,
    prevImageIndex,
    rightSlide,
    leftSlide,
  };
};

export default useCarousel;
