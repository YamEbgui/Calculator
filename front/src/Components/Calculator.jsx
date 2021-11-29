import React from 'react'
import { useState, useEffect } from 'react'
import Display from './Display'
import NumberButton from './NumberButton'
import OperatorButton from './OperatorButton'

function Calculator() {
  const [display, setDisplay] = useState('0')
  let flagResult = false //say if whatshown on the display is result or not

  //this function check if its possiable to add '.' to the display
  function isPossiableToDecimal(string) {
    for (let i = string.length - 1; i >= 0; i--) {
      console.log(string.charAt(i))
      console.log(i)
      if (string.charAt(i) === '.') {
        return false
      } else if (!isCharNumber(string.charAt(i))) {
        return true
      }
    }
    return true
  }

  function addNumberForDisplay(number) {
    console.log(number)
    if (display === '0') {
      if (number === '.') {
        let newDisplay = new String(display)
        setDisplay(newDisplay.concat(number))
      } else {
        setDisplay(number)
      }
    } else if (number !== '.' || isPossiableToDecimal(display)) {
      let newDisplay = new String(display)
      setDisplay(newDisplay.concat(number))
    }
  }

  function isCharNumber(c) {
    return c >= '0' && c <= '9'
  }

  function makeOperation(operator) {
    if (operator === 'AC') {
      setDisplay('0')
    } else if (isCharNumber(display.charAt(display.length - 1))) {
      let newDisplay = new String(display)
      setDisplay(newDisplay.concat(operator))
    } else if (
      !isCharNumber(display.charAt(display.length - 1)) &&
      !isCharNumber(display.charAt(display.length - 2))
    ) {
      if (operator === '-') {
        let newDisplay = new String(display)
        newDisplay = newDisplay.substring(0, newDisplay.length - 1)
        console.log(newDisplay)
        setDisplay(newDisplay.concat(operator))
      } else {
        let newDisplay = new String(display)
        newDisplay = newDisplay.substring(0, newDisplay.length - 2)
        console.log(newDisplay)
        setDisplay(newDisplay.concat(operator))
      }
    } else if (
      !isCharNumber(display.charAt(display.length - 1)) &&
      operator !== '-'
    ) {
      let newDisplay = new String(display)
      newDisplay = newDisplay.substring(0, newDisplay.length - 1)
      console.log(newDisplay)
      setDisplay(newDisplay.concat(operator))
    } else {
      let newDisplay = new String(display)
      setDisplay(newDisplay.concat(operator))
    }
  }

  function makeEqual() {
    if (!isCharNumber(display.charAt(display.length - 1))) {
      let numOfCharsToRemove = 1
      if (!isCharNumber(display.charAt(display.length - 2)))
        numOfCharsToRemove++
      if (!isCharNumber(display.charAt(display.length - 3)))
        numOfCharsToRemove++
      let newDisplay = new String(display)
      newDisplay = newDisplay.substring(
        0,
        newDisplay.length - numOfCharsToRemove
      )
      console.log(newDisplay)
      setDisplay(eval(newDisplay).toString())
    } else {
      setDisplay(eval(display).toString())
    }
  }

  return (
    <div className="calc">
      <Display data={display} />
      <div className="buttonsDiv">
        <OperatorButton
          id="clear"
          operator={'AC'}
          changeDisplay={makeOperation}
        />
        <OperatorButton
          id="divide"
          operator={'/'}
          changeDisplay={makeOperation}
        />
        <OperatorButton
          id="multiply"
          operator={'*'}
          changeDisplay={makeOperation}
        />
        <NumberButton
          id="one"
          changeDisplay={addNumberForDisplay}
          number={'1'}
        />
        <NumberButton
          id="two"
          changeDisplay={addNumberForDisplay}
          number={'2'}
        />
        <NumberButton
          id="three"
          changeDisplay={addNumberForDisplay}
          number={'3'}
        />
        <OperatorButton id="add" operator={'+'} changeDisplay={makeOperation} />
        <NumberButton
          id="four"
          changeDisplay={addNumberForDisplay}
          number={'4'}
        />
        <NumberButton
          id="five"
          changeDisplay={addNumberForDisplay}
          number={'5'}
        />
        <NumberButton
          id="six"
          changeDisplay={addNumberForDisplay}
          number={'6'}
        />
        <OperatorButton
          id="subtract"
          operator={'-'}
          changeDisplay={makeOperation}
        />
        <NumberButton
          id="seven"
          changeDisplay={addNumberForDisplay}
          number={'7'}
        />
        <NumberButton
          id="eight"
          changeDisplay={addNumberForDisplay}
          number={'8'}
        />
        <NumberButton
          id="nine"
          changeDisplay={addNumberForDisplay}
          number={'9'}
        />
        <NumberButton
          id="zero"
          changeDisplay={addNumberForDisplay}
          number={'0'}
        />
        <button id="decimal" onClick={() => addNumberForDisplay('.')}>
          .
        </button>
        <button
          onClick={() => {
            makeEqual()
          }}
          id="equals"
        >
          =
        </button>
      </div>
    </div>
  )
}

export default Calculator
