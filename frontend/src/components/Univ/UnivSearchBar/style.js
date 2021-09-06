import styled from "styled-components";

export const DropDownList = styled("li")`
  background-color: white;
  border: 1px solid #2e42a9;
  border-top: none;
  padding: 1em;
  width: 20em;
  transform: translateY(50px);
`;

export const InputForm = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: ${(props) => props.isMobile < 768 && "100vw"};
  position: ${(props) => props.isMobile < 768 && "absolute"};
  top: ${(props) => props.isMobile < 768 && "0px"};
  left: ${(props) => props.isMobile < 768 && "0px"};
  background-color: ${(props) => (props.isMobile < 768 ? "white" : "#2e42a9")};
  height: ${(props) => (props.isMobile < 768 ? "100vh" : "50px")};
  .input {
    width: ${(props) => (props.isMobile < 768 ? `100vw` : "20em")};
    height: 50px;

    padding: 14px;
    font-size: 1em;
    border: 5px solid #2e42a9;
  }
`;

export const Button = styled.div`
  background-color: #2e42a9;
  width: 50px;
  height: 50px;
  display: inline-block;
`;

export const Input = styled.input`
  padding: 1rem;
  font-size: 1em;
  border: 5px solid #2e42a9;
`;
