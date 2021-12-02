import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { HamburgerMenu, HamburgerModal } from "components/HamburgerMenu";
import { IconLogo } from "components/Icon";
import styled from "styled-components";
import useAnimation from "hooks/useAnimation";

import { useHistory } from "react-router-dom";

const Header = (props) => {
  const { isMounted, setIsMounted, unMount, animation } = useAnimation({ delay: 600 });
  const history = useHistory();
  useEffect(() => {
    return history.listen((location) => {
      setIsMounted(false);
    });
  }, [history]);
  return (
    <Wrapper id="header">
      <CenterAlignWrapper>
        <Container>
          <IconLogo widthSize="65px" heightSize="100%"></IconLogo>
          <UnivTitle>{props.univName}</UnivTitle>
          <HamburgerMenu
            isMounted={isMounted}
            setIsMounted={setIsMounted}
            unMount={unMount}
            animation={animation}
          />
        </Container>
      </CenterAlignWrapper>
      {isMounted && <HamburgerModal isOnAnimation={animation} />}
    </Wrapper>
  );
};

Header.defaultProps = {
  univName: "농담곰대학교",
};

Header.propTypes = {
  univName: PropTypes.string.isRequired,
};

export default Header;

const UnivTitle = styled.div`
  color: white;
`;
const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  box-shadow: 0px 2px 6px 0px black;
  height: 50px;
  position: fixed;
  z-index: 1;
  font-size: 1rem;
`;
const CenterAlignWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  height: 50px;
`;
