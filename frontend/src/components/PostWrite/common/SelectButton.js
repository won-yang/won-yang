import styled, { css } from "styled-components";
import { device } from "styles/media";
import Button from "components/common/Button";

const SelectButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.oppositeDefalut};
  font-size: 0.7rem;
  height: 30px;
  margin-left: 3px;
  width: 50px;
  color: ${({ theme }) => theme.colors.nonSelected};
  border: 1px solid ${({ theme }) => theme.colors.nonSelected};
  ${(props) =>
    props.isSelected &&
    css`
      color: ${({ theme }) => theme.colors.selected};
      border: 1px solid ${({ theme }) => theme.colors.selected};
    `}

  @media ${device.tablet} {
    font-size: 1.3em;
    height: 50px;
    width: 120px;
  }
`;

export default SelectButton;
