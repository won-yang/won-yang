import React from "react";
import { DropDownList } from "./style";

const DropDown = (props) => {
  const { campusList, onSelected } = props;
  return (
    <>
      {campusList &&
        campusList.map((item) => (
          <DropDownList
            key={item.id}
            onMouseUp={(e) => onSelected(e, item.id)}
          >{`${item.name}`}</DropDownList>
        ))}
    </>
  );
};

export default DropDown;
