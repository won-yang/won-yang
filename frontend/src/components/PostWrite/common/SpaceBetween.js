import styled from "styled-components";

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  position: ${(props) => (props.prevPhase ? "none" : "fixed")};
  bottom: 25px;
  left: 10px;
  width: ${(props) => (props.prevPhase ? "none" : "100vw")};
  height: ${(props) => (props.prevPhase ? "80px" : "none")};
  margin-top: 30px;
`;

export default SpaceBetween;
