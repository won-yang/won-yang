import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.widthSize};
  height: ${(props) => props.heightSize};
  svg {
    width: 100%;
    height: 100%;
  }
`;

export { Container };
