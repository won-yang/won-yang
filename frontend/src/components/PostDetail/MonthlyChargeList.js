import LabelWithText from "components/PostWrite/common/LabelWithTextListItem";
import React from "react";
import { useSelector } from "react-redux";
import { selectPostWrite } from "store/Postwrite/PostwriteSlice";
import styled from "styled-components";

const MonthlyChargeList = (props) => {
  const { monthlyRent, deposit, includingTax } = useSelector(selectPostWrite);
  return (
    <PriceInfoList>
      <LabelWithText titleText="보증금" text={`${deposit}만원`} />
      <LabelWithText titleText="월세" text={`${monthlyRent}만원`} />
      <LabelWithText titleText="관리비" text={`n만원`}>
        <PriceSubText>(전기세, 수도세, 가스비 포함)</PriceSubText>
      </LabelWithText>
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

const PriceSubText = styled.span`
  font-size: 0.7em;
`;
