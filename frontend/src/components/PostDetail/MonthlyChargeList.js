import LabelWithText from "components/PostWrite/common/LabelWithTextListItem";
import React from "react";
import { useSelector } from "react-redux";
import { selectPostWrite } from "store/Postwrite/PostwriteSlice";
import styled from "styled-components";

const MonthlyChargeList = ({ monthlyRent, deposit, serviceFee, includingTax }) => {
  // const { monthly_rent, deposit, service_fee, including_tax } = useSelector(selectPostWrite);

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
