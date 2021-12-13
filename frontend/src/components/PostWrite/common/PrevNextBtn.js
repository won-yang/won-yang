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
  margin: 0 10px 0 10px;
  border: none;
  border-radius: 5px;
  @media ${device.tablet} {
    font-size: 25px;
    width: 170px;
    height: 60px;
  }
`;

export default PrevNextBtn;
