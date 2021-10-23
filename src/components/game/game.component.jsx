import React, { useState } from "react";
import Board from "../board/board.component";
import TimeStepContainer from "../timeStep/timeStepContainer";
import "./game.style.css";

const Game = () => {
  const [playerState, setPlayerState] = useState("x");
  const [stepNumber, setStepNumber] = useState(0);
  const [thereIsWinner, setThereIsWinner] = useState(false);
  const [IsItDrow, setIsItDrow] = useState(false);
  const [timeState, setTimeState] = useState([
    {
      newBoardState: Array(9).fill(""),
      currentStep: 0,
      nextPlayer: "x",
      isItDrowTemp: false,
      thereIsWinnerTemp: false,
    },
  ]);
  /**
   *
   * @param {*} newBoardState
   * @returns
   */
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
    if (thereIsWin.length) {
      return thereIsWin;
    }
    return null;
  };

  const onBtnClick = (e) => {
    const timePoints = timeState.slice(0, stepNumber + 1);
    const board = timePoints[stepNumber].newBoardState;
    let nextPlayer = "";
    if (!thereIsWinner && !IsItDrow) {
      let newBoardState = [...board];
      if (!newBoardState[e.target.id]) {
        newBoardState[e.target.id] = playerState;
        const currentStep = stepNumber + 1;
        setStepNumber(currentStep);
        let winner = checkWinner(newBoardState);
        let thereIsWinnerTemp = false;
        let isItDrowTemp = false;
        if (winner) {
          setThereIsWinner(true);
          thereIsWinnerTemp = true;
        }else
        if (currentStep === 9) {
          setIsItDrow(true);
          isItDrowTemp = true;
        } else {
          nextPlayer = playerState === "x" ? "o" : "x";
          setPlayerState(nextPlayer);
        }
        setTimeState([
          ...timePoints,
          {
            newBoardState: newBoardState,
            currentStep: currentStep,
            nextPlayer: nextPlayer,
            isItDrowTemp: isItDrowTemp,
            thereIsWinnerTemp: thereIsWinnerTemp,
          },
        ]);
      }
    }
  };
  const onTimeStepClick = (e) => {
    console.log(e.target.id);
    setStepNumber(parseInt(e.target.id));
    setPlayerState(timeState[parseInt(e.target.id)].nextPlayer);
    setIsItDrow(timeState[parseInt(e.target.id)].isItDrowTemp);
    setThereIsWinner(timeState[parseInt(e.target.id)].thereIsWinnerTemp);
  };

  return (
    <div className="game">
      <Board
        boardState={timeState[stepNumber].newBoardState}
        onClick={onBtnClick}
      />
      <div className="footer">
        <div className="time">
          <h3>History</h3>
          <TimeStepContainer
            timeState={timeState}
            onTimeStepClick={onTimeStepClick}
          />
        </div>
        <div className="winner">
          <h3>
            {thereIsWinner
              ? `the Winner is : ${playerState}`
              : IsItDrow
              ? "it is a Drow"
              : `player turn is : ${playerState}`}
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Game;
