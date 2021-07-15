import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, HamburgerSticks, SticksWrapper } from './style';
import HamburgerModal from './HamburgerModal';

const HamburgerMenu = (props) => {
  const [isMounted, setIsMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      setShouldRender(false);
    }
  }, [isMounted]);
  const handleClick = (e) => {
    console.log(e.target);
    const { kind } = e.target.dataset;
    if (kind === 'modal-bg') {
      setIsMounted(false);
    } else if (
      isMounted &&
      (kind === 'modal-toggle-btn' || kind === 'modal-btn-sticks')
    ) {
      setIsMounted(false);
    } else if (
      !isMounted &&
      (kind === 'modal-toggle-btn' || kind === 'modal-btn-sticks')
    ) {
      setIsMounted(true);
    }
  };
  return (
    <Container data-kind='wrapper' onClick={handleClick}>
      <SticksWrapper data-kind='modal-toggle-btn'>
        <HamburgerSticks
          data-kind='modal-btn-sticks'
          open={shouldRender}
        ></HamburgerSticks>
      </SticksWrapper>
      {isMounted ? <HamburgerModal open={shouldRender} /> : ''}
    </Container>
  );
};

HamburgerMenu.propTypes = {};

export default HamburgerMenu;
