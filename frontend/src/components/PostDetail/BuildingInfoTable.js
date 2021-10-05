import React from "react";
import styled from "styled-components";

const BuildingInfoTable = () => {
  return (
    <Table>
      <tr>
        <th></th>
        <th></th>
      </tr>
      <tr>
        <TableRowTitle>계약만료일</TableRowTitle>
        <TableRowInfo>2019년 2월 3일</TableRowInfo>
      </tr>
      <tr>
        <TableRowTitle>입주가능일</TableRowTitle>
        <TableRowInfo>2018년 7월 8일</TableRowInfo>
      </tr>
      <tr>
        <TableRowTitle>건물 층수</TableRowTitle>
        <TableRowInfo>총 5층 중에 2층</TableRowInfo>
      </tr>
      <tr>
        <TableRowTitle>건물 구조</TableRowTitle>
        <TableRowInfo>단독 주택</TableRowInfo>
      </tr>
      <tr>
        <TableRowTitle>방의 구조</TableRowTitle>
        <TableRowInfo>투룸</TableRowInfo>
      </tr>
      <tr>
        <TableRowTitle>창의 방향</TableRowTitle>
        <TableRowInfo>남향</TableRowInfo>
      </tr>
      <tr>
        <TableRowTitle>힉교까지의 거리</TableRowTitle>
        <TableRowInfo>도보로 10분</TableRowInfo>
      </tr>
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
