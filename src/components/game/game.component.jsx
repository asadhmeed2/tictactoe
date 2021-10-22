import React, { useState } from "react";
import Board from "../board/board.component";
import "./game.style.css";

const Game = () => {
  const [boardState, setBoardState] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const onBtnClick =(e)=>{
    let newBordState=[...boardState];
    newBordState[e.target.id] = "x";
    setBoardState(newBordState);
  }
  return (
    <div className="game">
      {console.log(boardState)}
      {console.log("ingme")}
      <Board boardState={boardState} onClick={onBtnClick} />
    </div>
  );
};
export default Game;
