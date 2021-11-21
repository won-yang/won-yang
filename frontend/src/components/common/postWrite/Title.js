import styled from "styled-components";
import { device } from "styles/media";

const Title = styled.h1`
  font-size: 25px;
  margin-bottom: 25px;
  @media ${device.tablet} {
    font-size: 45px;
  }
`;

export default Title;
