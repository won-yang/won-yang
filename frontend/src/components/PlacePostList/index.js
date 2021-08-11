import React from "react";
import PropTypes from "prop-types";
import PlacePostItem from "./PlacePostItem";

const PlacePostList = (props) => {
  return (
    <>
      <PlacePostItem></PlacePostItem>
      <PlacePostItem></PlacePostItem>
      <PlacePostItem></PlacePostItem>
      <PlacePostItem></PlacePostItem>
      <PlacePostItem></PlacePostItem>
    </>
  );
};

PlacePostList.propTypes = {};

export default PlacePostList;
