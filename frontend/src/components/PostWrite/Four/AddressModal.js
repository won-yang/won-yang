import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";
import { useDispatch } from "react-redux";
import { setAddress } from "store/Postwrite/PostwriteSlice";
import DimPortal from "components/ModalPortal/DimPortal";

const AddressModal = (props) => {
  const { setIsMounted } = props;
  const dispatch = useDispatch();
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    dispatch(setAddress(fullAddress));
    setIsMounted(false);
  };
  return (
    <DimPortal close={() => setIsMounted(false)}>
      <Wrapper>
        <DaumPostcode onComplete={handleComplete} {...props} />
      </Wrapper>
    </DimPortal>
  );
};

AddressModal.propTypes = {};

export default AddressModal;

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  width: 90%;
  margin: 0 auto;
  top: 10%;
`;
