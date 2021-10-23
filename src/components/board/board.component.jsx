import React from "react";
import Box from "../box/box.component";
import "./board.style.css";

const Board = ({ boardState, onClick}) => {
  return (
    <div className="gameBoard">
      {boardState.map((state, index) => {
        return (
          <Box value={state} key={index} id={index} onBtnClick={onClick} />
        );
      })}
    </div>
  );
};
export default Board;
