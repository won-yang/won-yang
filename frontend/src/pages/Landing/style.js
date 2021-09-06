import styled from "styled-components";

export const LandingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4693ef;
  height: 100vh;
  width: 100%;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #4693ef;
    height: 100vh;
    width: 100%;
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
  font-size: 2rem;
  color: white;
  margin-bottom: 1em;
`;
