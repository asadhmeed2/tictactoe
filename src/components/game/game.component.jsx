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
  const [IsItDrow, setIsItDrow] = useState(false);
  const [stateListClicked, setStateListClicked] = useState(false);

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
    if (!thereIsWinner && !IsItDrow) {
      let newBoardState = [...boardState];
      if (!newBoardState[e.target.id]) {
        newBoardState[e.target.id] = playerState;
        let currentStep = stepNumber + 1;
        setStepNumber(currentStep);
        let nextPlayer = playerState === "x" ? "o" : "x";
        setPlayerState(nextPlayer);
        setBoardState(newBoardState);
        let winner = checkWinner(newBoardState);
        let thereIsWinnerTemp = false;
        let isItDrowTemp = false;
        if (winner) {
          setThereIsWinner(true);
          thereIsWinnerTemp = true;
        }
        if (currentStep === 9) {
          setIsItDrow(true);
          isItDrowTemp = true;
        }
        setTimeState([
          ...timeState,
          {
            newBoardState,
            currentStep,
            nextPlayer,
            isItDrowTemp,
            thereIsWinnerTemp,
          },
        ]);
      }
    }
  };
  const onTimeStepClick = (e) => {
    setStateListClicked(true);
    setBoardState(timeState[e.target.id].newBoardState);
    setStepNumber(timeState[e.target.id].currentStep);
    setPlayerState(timeState[e.target.id].nextPlayer);
    setIsItDrow(timeState[e.target.id].isItDrowTemp);
    setThereIsWinner(timeState[e.target.id].thereIsWinnerTemp);
  };

  const onBoardClick = () => {
    if (stateListClicked) {
      let newTimeState = [...timeState];
      newTimeState = newTimeState.slice(
        0,
        timeState[stepNumber].currentStep
      );
      setTimeState(newTimeState);
      setStateListClicked(false);
    }
  };
  return (
    <div className="game">
      <Board
        boardState={boardState}
        onClick={onBtnClick}
        onBoardClick={onBoardClick}
      />
      <div className="footer">
        {timeState.map((el, i) => {
          return (
            <div className="timeStep" onClick={onTimeStepClick} key={i} id={i}>
              {i + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Game;
