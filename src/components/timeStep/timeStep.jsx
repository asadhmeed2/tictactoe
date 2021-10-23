import React from 'react'
import "./timeStep.style.css";

const TimeStep =({i,onTimeStepClick})=>{
return (
  <div className="timeStep" onClick={onTimeStepClick} id={i}>
    <span className="stepText" id={i}>{i?`Time Step ${i}`:'start point'}</span>
  </div>
);
}
export default TimeStep;