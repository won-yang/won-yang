import React from "react";
import styled from "styled-components";

import LabelWithText from "components/PostWrite/common/LabelWithTextListItem";

const MonthlyChargeList = ({ monthlyRent, deposit, serviceFee, includingTax }) => {
  const taxText = () => {
    let result = "";
    if (includingTax) {
      const { electricity, water, gas } = includingTax;
      if (!(electricity || water || gas)) {
        return "미";
      } else {
        if (electricity) {
          result += "전기세 ";
        }
        if (water) {
          result += "수도세 ";
        }
        if (gas) {
          result += "가스비 ";
        }
      }
    }
    return result;
  };
  return (
    <PriceInfoList>
      <LabelWithText titleText="보증금" text={`${deposit}만원`} />
      <LabelWithText titleText="월세" text={`${monthlyRent}만원`} />
      <LabelWithText titleText="관리비" text={`${serviceFee}만원`}>
        <PriceSubText>{taxText()}포함</PriceSubText>
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
