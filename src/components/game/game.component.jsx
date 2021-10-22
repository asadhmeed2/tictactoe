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
  const [timeState, setTimeState] = useState([]);
  const [stepNumber, setStepNumber] = useState(0);
  const [thereIsWinner, setThereIsWinner] = useState(false);

  const checkWinner = (newBoardState) => {
    const winingStrick = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [6, 4, 2],
      [0, 4, 8],
    ];
    let thereIsWin = winingStrick.filter((el) => {
      let [a, b, c] = el;
      return (
        newBoardState[a] &&
        newBoardState[a] === newBoardState[b] &&
        newBoardState[a] === newBoardState[c]
      );
    });
    console.log(thereIsWin);
    if (thereIsWin.length) {
      return thereIsWin;
    }
    return null;
  };
  const onBtnClick = (e) => {
    if (!thereIsWinner) {
      let newBoardState = [...boardState];
      if (!newBoardState[e.target.id]) {
        newBoardState[e.target.id] = playerState;
        let currentStep = stepNumber + 1;
        setStepNumber(currentStep);
        setPlayerState(playerState === "x" ? "o" : "x");
        setBoardState(newBoardState);
        setTimeState([...timeState, newBoardState]);
        let winner = checkWinner(newBoardState);
        // console.log(winner);
        if (winner) {
          setThereIsWinner(true);
        }
        if (currentStep === 9) {
          console.log("drow");
        }
      }
    }
  };
  return (
    <div className="game">
      <Board boardState={boardState} onClick={onBtnClick} />
      <div className="footer">
        {timeState.map((el, i) => {
          return (
            <div className="timeStep" key={i} id={i}>
              {i + 1}
            </div>
          );
        })}
        
      </div>
    </div>
  );
};
export default Game;
