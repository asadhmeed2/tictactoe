import React,{setState} from "react";
import Board from "../board/board.component";

const Board = () => {
    const [boardState,setBoardState] = setState(Array(9));
  return (
    <div className="game">
        console.log("inGame");
     <Board />
    </div>
  );
};
export default Board;
