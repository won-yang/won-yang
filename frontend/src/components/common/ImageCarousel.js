import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ImageCarousel = ({ imagePaths }) => {
  return (
    <StyledCarousel autoPlay={true} infiniteLoop={true}>
      {imagePaths.map((image, idx) => (
        <Wrapper key={image}>
          <Image src={image} />
        </Wrapper>
      ))}
    </StyledCarousel>
  );
};

ImageCarousel.propTypes = {
  imagePaths: PropTypes.array,
};

export default ImageCarousel;

const Wrapper = styled.div``;
const Image = styled.img`
  max-width: 720px;
  height: 520px;
  object-fit: cover;
`;

const StyledCarousel = styled(Carousel)`
  max-width: 90%;
  max-width: 720px;
  margin: 0 auto;

  & > button.control-arrow {
    background-color: rgba(0, 0, 0, 0.9);
  }
`;
