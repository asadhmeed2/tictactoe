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
  const [playerState, setPlayerState] = useState("x");

  const onBtnClick =(e)=>{
    let newBordState=[...boardState];
    console.log("player is :",playerState);
    newBordState[e.target.id] = playerState;
    setPlayerState(playerState==="x"?"o":"x");
    setBoardState(newBordState);
  }
  return (
    <div className="game">
      <Board boardState={boardState} onClick={onBtnClick} />
    </div>
  );
};
export default Game;
