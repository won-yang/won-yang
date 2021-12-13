import IconContainer from "components/Icon/IconContainer";
import React, { useMemo } from "react";
import styled from "styled-components";
import { ReactComponent as PersonIcon } from "assets/icon_person_blue.svg";
import { ReactComponent as MoneyIcon } from "assets/icon_money_blue.svg";
import { ReactComponent as CalendarIcon } from "assets/icon_calender_blue.svg";
import { ReactComponent as MapIcon } from "assets/icon_map_blue.svg";
import { ReactComponent as FurnitureIcon } from "assets/icon_furniture_blue.svg";
import { ReactComponent as PictureIcon } from "assets/icon_picture_blue.svg";
import { ReactComponent as CheckIcon } from "assets/icon_check.svg";
import WriteProgressIcon from "components/Icon/WriteProgressIcon";
import usePathname from "hooks/usePathname";
import { Link } from "react-router-dom";
import { device } from "styles/media";

const WriteProgressBar = (props) => {
  const { getWritePhase } = usePathname();
  const currentPhase = useMemo(() => getWritePhase(), [getWritePhase]);
  console.log(currentPhase);
  return (
    <Container>
      <IconBox>
        {currentPhase >= "1" && <StyledCheckIcon />}
        <Link to="/write/1">
          <PersonIcon />
        </Link>
      </IconBox>

      <IconBox>
        {currentPhase >= "2" && <StyledCheckIcon />}
        <Link to="/write/2">
          <MoneyIcon />
        </Link>
      </IconBox>

      <IconBox>
        {currentPhase >= "3" && <StyledCheckIcon />}
        <Link to="/write/3">
          <CalendarIcon />
        </Link>
      </IconBox>

      <IconBox>
        {currentPhase >= "4" && <StyledCheckIcon />}
        <Link to="/write/4">
          <MapIcon />
        </Link>
      </IconBox>

      <IconBox>
        {currentPhase >= "5" && <StyledCheckIcon />}
        <Link to="/write/5">
          <FurnitureIcon />
        </Link>
      </IconBox>

      <IconBox>
        {currentPhase >= "6" && <StyledCheckIcon />}
        <Link to="/write/6">
          <PictureIcon />
        </Link>
      </IconBox>
    </Container>
  );
};

WriteProgressBar.propTypes = {};

export default WriteProgressBar;

const Container = styled.div`
  justify-content: center;
  display: flex;
  gap: 2em;
  margin: 80px 0px;
  width: 100%;
`;

const IconBox = styled.div`
  & svg {
    max-width: 70px;
    max-height: 70px;
    @media ${device.mobileL} {
      max-width: 30px;
      max-height: 30px;
    }
  }
  position: relative;
`;

const StyledCheckIcon = styled(CheckIcon)`
  position: absolute;
  top: -70%;
`;
