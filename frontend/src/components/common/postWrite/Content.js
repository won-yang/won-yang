import styled from "styled-components";
import { device } from "styles/media";

const Content = styled.p`
  font-size: 15px;
  margin-bottom: 25px;
  @media ${device.tablet} {
    font-size: 25px;
  }
`;

export default Content;
