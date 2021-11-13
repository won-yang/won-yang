import React from "react";
import styled from "styled-components";

const MonthlyChargeList = () => {
  return (
    <PriceInfoList>
      <li>
        보증금<PriceText>300 만원</PriceText>
      </li>
      <li>
        월세<PriceText>30 만원</PriceText>
      </li>
      <li>
        관리비
        <PriceText>
          5 만원
          <PriceSubText>(전기세, 수도세, 가스비 포함)</PriceSubText>
        </PriceText>
      </li>
    </PriceInfoList>
  );
};

export default MonthlyChargeList;

const PriceInfoList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

const PriceText = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.blue};
`;

const PriceSubText = styled.span`
  font-size: 0.7em;
`;
