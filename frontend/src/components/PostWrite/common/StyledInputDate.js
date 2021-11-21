import styled from "styled-components";
import Input from "components/common/Input";
import { device } from "styles/media";

const StyledInputDate = styled(Input)`
  width: 65%;
  height: 25px;
  margin-bottom: 25px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.navyColor};
  font-size: 15px;
  @media ${device.tablet} {
    width: 300px;
    height: 50px;
    font-size: 25px;
  }
`;

export default StyledInputDate;
