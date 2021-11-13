import IconContainer from "components/Icon/IconContainer";
import React from "react";
import styled from "styled-components";
import { ReactComponent as PersonIcon } from "assets/icon_person_blue.svg";
import { ReactComponent as MoneyIcon } from "assets/icon_money_blue.svg";
import { ReactComponent as CalendarIcon } from "assets/icon_calender_blue.svg";
import { ReactComponent as MapIcon } from "assets/icon_map_blue.svg";
import { ReactComponent as FurnitureIcon } from "assets/icon_furniture_blue.svg";
import { ReactComponent as PictureIcon } from "assets/icon_picture_blue.svg";
import { ReactComponent as CheckIcon } from "assets/icon_check.svg";
import WriteProgressIcon from "components/Icon/WriteProgressIcon";

const WriteProgressBar = (props) => {
  return (
    <Container>
      <WriteProgressIcon isWrited={true}>
        <PersonIcon />
      </WriteProgressIcon>

      <WriteProgressIcon>
        <MoneyIcon />
      </WriteProgressIcon>

      <WriteProgressIcon>
        <CalendarIcon />
      </WriteProgressIcon>

      <WriteProgressIcon>
        <MapIcon />
      </WriteProgressIcon>

      <WriteProgressIcon>
        <FurnitureIcon />
      </WriteProgressIcon>

      <WriteProgressIcon>
        <PictureIcon />
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
