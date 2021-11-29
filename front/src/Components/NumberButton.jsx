import React from "react";

function NumberButton(props){
return <button id ={props.id} onClick={()=>props.changeDisplay(props.number)}>{props.number}</button>
}

export default NumberButton;