import styled from "styled-components";
import { device } from "styles/media";

const InlineSubTitle = styled.h3`
  font-size: 0.9em;
  display: inline-block;
  width: 30%;
  text-align: right;
  margin-right: 8px;
  @media ${device.tablet} {
    font-size: 1.3em;
    height: 50px;
    width: 40%;
    margin-right: 30px;
  }
`;

export default InlineSubTitle;
