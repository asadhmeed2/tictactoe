import React from "react";
import TimeStep from "./timeStep";
const TimeStepContainer = ({timeState,onTimeStepClick}) => {
  return (
    <div className="TimeStepContainer">
    { timeState.map((timeStep ,i)=>{
      return  <TimeStep i={i} key={i} onTimeStepClick={onTimeStepClick}/>;
     })}
    </div>
  );
};
export default TimeStepContainer;
