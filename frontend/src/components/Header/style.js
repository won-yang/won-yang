import styled from 'styled-components';

export const Wrapper = styled.header`
  background-color: ${(props) => props.theme.primary};
  width: 100%;
  box-shadow: 0px 2px 5px 3px grey;
  height: 50px;
  position: fixed;
  z-index: 1;
  font-size: 16px;
`;
export const CenterAlignWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1060px;
  margin: 0 auto;
  height: 50px;
`;
