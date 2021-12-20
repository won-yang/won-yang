import React from "react";
import styled from "styled-components";
import { roomTypes } from "utils/constants/roomTypes";
import { buildingTypes } from "utils/constants/buildingTypes";
import { windowSides } from "utils/constants/windowSide";

const BuildingInfoTable = (props) => {
  const {
    totalFloor,
    currentFloor,
    buildType,
    walkingTime,
    busTime,
    windowSide,
    roomType,
    contractExpireDate,
    moveInDate,
  } = props;
  console.log(currentFloor);

  return (
    <Table>
      <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <TableRowTitle>계약만료일</TableRowTitle>
          <TableRowInfo>{contractExpireDate}</TableRowInfo>
        </tr>
        <tr>
          <TableRowTitle>입주가능일</TableRowTitle>
          <TableRowInfo>{moveInDate}</TableRowInfo>
        </tr>
        <tr>
          <TableRowTitle>건물 층수</TableRowTitle>
          <TableRowInfo>
            총 {totalFloor}층 중에 {currentFloor}층
          </TableRowInfo>
        </tr>
        <tr>
          <TableRowTitle>건물 구조</TableRowTitle>
          <TableRowInfo>{buildingTypes[buildType]}</TableRowInfo>
        </tr>
        <tr>
          <TableRowTitle>방의 구조</TableRowTitle>
          <TableRowInfo>{roomTypes[roomType]}</TableRowInfo>
        </tr>
        <tr>
          <TableRowTitle>창의 방향</TableRowTitle>
          <TableRowInfo>{windowSides[windowSide]}</TableRowInfo>
        </tr>
        <tr>
          <TableRowTitle>힉교까지의 거리</TableRowTitle>
          <TableRowInfo>도보로 {walkingTime}분</TableRowInfo>
        </tr>
      </thead>
    </Table>
  );
};

export default BuildingInfoTable;

const Table = styled.table`
  width: 100%;
  border-top: 3px solid ${({ theme }) => theme.colors.lightGray};
  border-bottom: 3px solid ${({ theme }) => theme.colors.lightGray};
  & td {
    padding: 15px 0 15px 0;
  }

  & tr + tr {
    border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  }
`;

const TableRowTitle = styled.td`
  color: ${({ theme }) => theme.colors.gray};
`;

const TableRowInfo = styled.td`
  font-weight: bold;
`;
