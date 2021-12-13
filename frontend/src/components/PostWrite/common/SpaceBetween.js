import styled from "styled-components";

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  position: ${(props) => (props.prevPhase ? "none" : "fixed")};
  bottom: 25px;
  left: 0;
  width: 100vw;
`;

export default SpaceBetween;
