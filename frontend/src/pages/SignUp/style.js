import styled from "styled-components";

export const SignUpContainer = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpHeader = styled.header`
  background-color: #4593ef;
  width: 100vw;

  div {
    margin: auto;
  }
`;

export const SignUpForm = styled.form`
  border: 1px solid black;
  display: flex;
  flex-direction: column;

  .info {
    font-family: NanumGothic;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;
    /* identical to box height */

    color: #515151;
  }
`;
