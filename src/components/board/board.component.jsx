import React from 'react';
import Box from "../box/box.component"


const Board =({boardState ,onClick})=>{
    return <div className="gameBoard">{boardState.map((state, index)=>{
       return <Box value={state} key={index} id={index} onClick={onClick}/>
    })}</div>;
}
export default Board;