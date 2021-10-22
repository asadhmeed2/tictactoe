import React from "react";
import "./box.style.css"

const Box = ({ value, onClick, id }) => {
  return (
    <input
      type="button"
      key={id}
      className="boxBtn"
      id={id}
      value={value}
      onClick={(e) => onClick(e)}
    />
  );
};
export default Box;