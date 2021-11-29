import React from "react";

function OperatorButton(props){
return <button id ={props.id} onClick={()=>props.changeDisplay(props.operator)}>{props.operator}</button>
}

export default OperatorButton;