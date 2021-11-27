import styled, { css } from "styled-components";

export const ModalBackGround = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  ${(props) =>
    props.isOnAnimation === false &&
    css`
      background-color: unset;
    `}
`;

export const ModalContainer = styled.div`
  background-color: white;
  position: absolute;
  left: 100%;
  padding-top: 50px;
  height: 100%;
  width: 70%;
  max-width: 260px;
  transition: 0.4s;
  ${(props) =>
    props.isOnAnimation
      ? css`
          transition: 0.4s;
          transform: translateX(-100%);
        `
      : css`
          transition: 0.4s;
          transform: translateX(100%);
        `}/* &.modal-open {
    transition: 0.4s;
    transform: translateX(-100%);
  }
  &.modal-close {
    transition: 0.4s;
    transform: translateX(100%);
  } */
`;
