import React from "react";
import "./box.style.css";

const Box = ({ value, onBtnClick, onBoardClick, id }) => {
  return (
    <input
      type="button"
      key={id}
      className={`boxBtn ${value}`}
      id={id}
      value={value}
      onClick={(e) => {
        onBtnClick(e);
      }}
    />
  );
};
export default Box;
