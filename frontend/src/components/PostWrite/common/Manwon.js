import styled from "styled-components";
import { device } from "styles/media";

const Manwon = styled.span`
  font-size: 0.8em;
  margin-left: 10px;
  @media ${device.tablet} {
    font-size: 1.3em;
    height: 50px;
    width: 150px;
  }
`;

export default Manwon;
