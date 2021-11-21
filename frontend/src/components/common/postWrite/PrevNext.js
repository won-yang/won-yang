import styled from "styled-components";
import Button from "components/common/Button";
import { device } from "styles/media";

const PrevNextBtn = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.oppositeDefalut};
  font-size: 15px;
  width: 100px;
  height: 40px;
  margin-left: 5px;
  border: none;
  border-radius: 5px;
  @media ${device.tablet} {
    font-size: 25px;
    width: 170px;
    height: 60px;
  }
`;

export default PrevNextBtn;
