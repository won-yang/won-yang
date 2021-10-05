import styled from "styled-components";

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
  height: 100%;
  width: 70%;
  max-width: 260px;
  /* transform: ${(props) => (props.open ? "translateX(-100%)" : "")}; */
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
