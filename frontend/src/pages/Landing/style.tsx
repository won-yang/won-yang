import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.common.mainBgColor};
`;

export const LogoContainer = styled.div`
  width: ${(props) => props.theme.common.svgSize.large};
  height: ${(props) => props.theme.common.svgSize.large};
  margin-bottom: 50px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ContainerWithSearchAndLogin = styled.div`
  flex-direction: row;
  input {
    display: block;
  }
`;
