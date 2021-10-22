import React from "react";
import "./box.style.css"

const Box =({value,onClick,key,id})=> {
return(
    <input type="button" key={key} className="boxBtn" id={id} value={value} onClick={onClick}/>
)
}
export default Box;