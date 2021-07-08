import styled from 'styled-components';

export const HamburgerSticks = styled.div`
  position: relative;
  top: 50%;
  transform: translate(0%, -50%);
  width: 50%;
  height: 3px;
  background-color: white;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 3px;
    background-color: white;
    top: -10px;
  }
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 3px;
    background-color: white;
    top: 10px;
    &:hover {
      background-color: beige;
    }
  }
`;

export const Container = styled.div`
  width: 65px;
  height: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  &:hover ${HamburgerSticks}:before {
    background-color: black;
  }
  &:hover ${HamburgerSticks} {
    background-color: black;
  }
  &:hover ${HamburgerSticks}:after {
    background-color: black;
  }
`;
