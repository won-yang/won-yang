import styled from "styled-components";
import Input from "components/common/Input";
import { device } from "styles/media";

const StyledInput = styled(Input)`
  width: 90%;
  height: 25px;
  margin-bottom: 25px;
  font-size: 15px;
  @media ${device.tablet} {
    width: 95%;
    height: 50px;
    font-size: 25px;
  }
`;

export default StyledInput;
