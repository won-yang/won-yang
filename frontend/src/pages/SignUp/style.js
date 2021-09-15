import styled from "styled-components";

export const SignUpContainer = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    text-align: center;
  }
  button {
    border: none;
  }
`;

export const SignUpHeader = styled.header`
  background-color: #4593ef;
  width: 100vw;
  height: 12em;

  div {
    margin: auto;
  }
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;

  .info {
    font-family: NanumGothic;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;

    color: #515151;
  }

  .signup__form {
    width: 20rem;
    height: 2.5em;
  }

  .signup__conplete {
    background-color: #4593ef;
    color: white;
    margin: auto;
    margin-top: 1em;
    width: 10rem;
    height: 3em;
    font-size: 1.2rem;
    border-radius: 10px;
  }
`;

export const FormHeader = styled.h2`
  font-size: 1.8em;
  text-align: center;
  margin: 20px 0 35px 0;
`;

export const LabelContainer = styled.label`
  font-size: 1.1em;
  display: flex;
  .header {
    margin-right: 6px;
  }

  .info {
    line-height: 20px;
    font-size: 0.7rem;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 25px;

  .univ__search {
    transform: translateY(-11px);
    width: 80%;
  }

  .search__univ {
    background-color: #2e42a9;
  }

  .nickname {
    width: 17rem;
  }
`;

export const DropDownUL = styled.ul`
  position: absolute;
  transform: translateY(-50px);
  height: 0px;
`;

export const IsValid = styled.p`
  color: ${(props) => (props.isValidNickname ? "green" : "red")};
  font-size: 1rem;
  transform: translateY(10px);
`;
