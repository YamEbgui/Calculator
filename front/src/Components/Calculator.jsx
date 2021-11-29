import React from "react";
import { useState , useEffect } from "react";
import Display from "./Display"
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";

function Calculator(){
    const [display,setDisplay]=useState("0");
    let flagResult =false; //say if whatshown on the display is result or not


    function isPossiableToDecimal(string){
        for(let i=string.length-1;i>=0;i--){
            console.log(string.charAt(i));
            console.log(i);
            if (string.charAt(i)==="."){
                return false
            }else if(!isCharNumber(string.charAt(i))){
                return true
            }
        }
        return true;
    }

    function addNumberForDisplay(number){
        console.log(number);
        if(display==="0"){
            if(number==="."){
                let newDisplay=new String(display);
                setDisplay(newDisplay.concat(number));
            }else{
                setDisplay(number);
            }
        }else if(number !== "." || isPossiableToDecimal(display)){
            let newDisplay=new String(display);
            setDisplay(newDisplay.concat(number))
        }
    }
    
    function isCharNumber(c) {
        return c >= '0' && c <= '9';
      }
    
    function makeOperation(operator){
        if (operator==="AC"){
            setDisplay("0")
        }else if (isCharNumber(display.charAt(display.length-1))){
            let newDisplay=new String(display);
            setDisplay(newDisplay.concat(operator))
        }else if(!isCharNumber(display.charAt(display.length-1)) && !isCharNumber(display.charAt(display.length-2))){
            if(operator === "-"){
                let newDisplay=new String (display);
                newDisplay=newDisplay.substring(0, newDisplay.length - 1);;  ;
                console.log(newDisplay);
                setDisplay(newDisplay.concat(operator))
            }else{
                let newDisplay=new String (display);
                newDisplay=newDisplay.substring(0, newDisplay.length - 2);;  ;
                console.log(newDisplay);
                setDisplay(newDisplay.concat(operator))
            }
        }else if(!isCharNumber(display.charAt(display.length-1)) && operator!=="-"){
            let newDisplay=new String (display);
                newDisplay=newDisplay.substring(0, newDisplay.length - 1);;  ;
                console.log(newDisplay);
                setDisplay(newDisplay.concat(operator))
        }else{
            let newDisplay=new String(display);
            setDisplay(newDisplay.concat(operator))
        }
    }

    function makeEqual(){
        if (!isCharNumber(display.charAt(display.length-1))){
            let newDisplay=new String (display);
            newDisplay=newDisplay.substring(0, newDisplay.length - 1);;  ;
            console.log(newDisplay);
            setDisplay(eval(newDisplay).toString())
        }else{
            setDisplay(eval(display).toString())
        }
        
    }


    return (<div><Display data={display}/>
                <button onClick={()=>{makeEqual()}}id="equals">=</button>
                <NumberButton id="zero" changeDisplay={addNumberForDisplay} number={"0"} />
                <NumberButton id="one" changeDisplay={addNumberForDisplay} number={"1"} />
                <NumberButton id="two" changeDisplay={addNumberForDisplay} number={"2"} />
                <NumberButton id="three" changeDisplay={addNumberForDisplay} number={"3"} />
                <NumberButton id="four" changeDisplay={addNumberForDisplay} number={"4"} />
                <NumberButton id="five" changeDisplay={addNumberForDisplay} number={"5"} />
                <NumberButton id="six" changeDisplay={addNumberForDisplay} number={"6"} />
                <NumberButton id="seven" changeDisplay={addNumberForDisplay} number={"7"} />
                <NumberButton id="eight" changeDisplay={addNumberForDisplay} number={"8"} />
                <NumberButton id="nine"changeDisplay={addNumberForDisplay} number={"9"} />
                <OperatorButton id="add" operator={"+"} changeDisplay={makeOperation}/>
                <OperatorButton id="subtract" operator={"-"} changeDisplay={makeOperation}/>
                <OperatorButton id="divide" operator={"/"} changeDisplay={makeOperation}/>
                <OperatorButton id="multiply" operator={"*"} changeDisplay={makeOperation}/>
                <OperatorButton id="clear" operator={"AC"} changeDisplay={makeOperation}/>
                <button id="decimal" onClick={()=>addNumberForDisplay(".")}>.</button>
            </div>
    )
} 

export default Calculator;
