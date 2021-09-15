import styled from "styled-components";

export const LandingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4693ef;
  height: 100vh;
  width: 100vw;
  @media only screen and (max-width: 565px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #4693ef;
    height: 100vh;
    width: 100vw;
    min-width: 280px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: 200px;
`;

export const StringWrapper = styled.div`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1em;
`;
