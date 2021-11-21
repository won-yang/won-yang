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

const WriteProgressBar = (props) => {
  const { getWritePhase } = usePathname();
  const currentPhase = useMemo(() => getWritePhase, []);
  return (
    <Container>
      <WriteProgressIcon isWrited={getWritePhase() >= "1"}>
        <Link to="/write/1">
          <PersonIcon />
        </Link>
      </WriteProgressIcon>

      <WriteProgressIcon isWrited={getWritePhase() >= "2"}>
        <Link to="/write/2">
          <MoneyIcon />
        </Link>
      </WriteProgressIcon>

      <WriteProgressIcon isWrited={getWritePhase() >= "3"}>
        <Link to="/write/3">
          <CalendarIcon />
        </Link>
      </WriteProgressIcon>

      <WriteProgressIcon isWrited={getWritePhase() >= "4"}>
        <Link to="/write/4">
          <MapIcon />
        </Link>
      </WriteProgressIcon>

      <WriteProgressIcon isWrited={getWritePhase() >= "5"}>
        <Link to="/write/5">
          <FurnitureIcon />
        </Link>
      </WriteProgressIcon>

      <WriteProgressIcon isWrited={getWritePhase() >= "6"}>
        <Link to="/write/6">
          <PictureIcon />
        </Link>
      </WriteProgressIcon>
    </Container>
  );
};

WriteProgressBar.propTypes = {};

export default WriteProgressBar;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;
  margin: 50px 0px;
`;
const ProgressBarIconContainer = styled(IconContainer)`
  position: relative;
`;

const CheckContainer = styled(IconContainer)`
  position: absolute;
  bottom: 40px;
`;
