import styled from "styled-components";
import { device } from "styles/media";
import Button from "components/common/Button";

const SelectButton = styled(Button)`
  border: 1px solid #aaaaaa;
  background-color: ${({ theme }) => theme.colors.oppositeDefalut};
  font-size: 0.7rem;
  height: 30px;
  margin-left: 3px;
  width: 50px;
  border: 1px solid ${(props) => props?.color};
  color: ${(props) => props?.color};

  @media ${device.tablet} {
    font-size: 1.3em;
    height: 50px;
    width: 120px;
  }
`;

export default SelectButton;
