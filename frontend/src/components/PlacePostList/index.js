import React from "react";
import PropTypes from "prop-types";
import PlacePostItem from "./PlacePostItem";

const PlacePostList = (props) => {
  const { items } = props;
  return (
    <>
      {items?.map((item) => (
        <PlacePostItem key={item.id} item={item} />
      ))}
    </>
  );
};

PlacePostList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default PlacePostList;
