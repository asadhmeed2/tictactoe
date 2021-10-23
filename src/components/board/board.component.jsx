import React from "react";
import Box from "../box/box.component";
import "./board.style.css";

const Board = ({ boardState, onClick, onBoardClick }) => {
  return (
    <div className="gameBoard" onClick={onBoardClick}>
      {boardState.map((state, index) => {
        return <Box value={state} key={index} id={index} onClick={onClick} />;
      })}
    </div>
  );
};
export default Board;
