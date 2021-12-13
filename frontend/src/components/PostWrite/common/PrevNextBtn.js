import styled from "styled-components";
import Button from "components/common/Button";
import { device } from "styles/media";

const PrevNextBtn = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.oppositeDefalut};
  opacity: ${(props) => props.deactivated && 0.5};
  font-size: 15px;
  width: 100px;
  height: 40px;
  margin: ${(props) => (props.prevPhase ? "none" : "0 15px 0 15px")};
  border: none;
  border-radius: 5px;
  @media ${device.tablet} {
    font-size: 25px;
    width: 170px;
    height: 60px;
    margin: 0 50px 0 50px;
    margin: ${(props) => (props.prevPhase ? "none" : "0 50px 0 50px")};
  }
`;

export default PrevNextBtn;
