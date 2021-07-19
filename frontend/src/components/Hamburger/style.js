import styled from 'styled-components';

export const SticksWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const HamburgerSticks = styled.div`
  position: relative;
  top: 50%;
  transform: translate(0%, -50%);
  width: 50%;
  height: 3px;
  background-color: white;
  transition: ease-in 0.3s;
  &.open {
    background-color: black;
    transform: rotate3d(0, 0, 1, 45deg);
    &::before {
      content: '';
      background-color: black;
      top: 0;
      transition: 0.6s;
      transform: rotate3d(0, 0, 1, 90deg);
    }
  }
  &.open::after {
    content: '';
    display: none;
  }
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
  }
`;

export const Container = styled.div`
  width: 65px;
  height: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  /* &:hover ${HamburgerSticks}:before {
    background-color: black;
  }
  &:hover ${HamburgerSticks} {
    background-color: black;
  }
  &:hover ${HamburgerSticks}:after {
    background-color: black;
  } */
`;

export const ModalBackGround = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
`;

export const ModalContainer = styled.div`
  background-color: white;
  position: absolute;
  left: 100%;
  padding-top: 50px;
  /* 50%까지 이동. */
  width: 50%;
  height: 100%;
  /* transform: ${(props) => (props.open ? 'translateX(-100%)' : '')}; */
  transition: 0.4s;
  &.modal-open {
    transition: 0.4s;
    transform: translateX(-100%);
  }
  &.modal-close {
    transition: 0.4s;
    transform: translateX(100%);
  }
`;
