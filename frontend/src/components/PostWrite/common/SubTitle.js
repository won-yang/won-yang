import styled from "styled-components";
import { device } from "styles/media";

const SubTitle = styled.h3`
  font-size: 15px;
  margin-bottom: 25px;
  @media ${device.tablet} {
    font-size: 25px;
  }
`;

export default SubTitle;
