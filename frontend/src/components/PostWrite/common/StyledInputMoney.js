import styled from "styled-components";
import { device } from "styles/media";
import Input from "components/common/Input";

const StyledInputMoney = styled(Input)`
  width: 100px;
  height: 30px;
  margin-bottom: 25px;
  box-sizing: border-box;
  @media ${device.tablet} {
    font-size: 1.3em;
    width: 150px;
    height: 50px;
  }
`;

export default StyledInputMoney;
