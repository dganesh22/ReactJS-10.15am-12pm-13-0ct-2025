import React, { useState } from 'react'
import Display from '../Components/Display'
import Keypad from '../Components/Keypad'
import { keys } from '../data/keys'

function Calculator(props) {
  const [inp, setInp] = useState("")
  const [out,setOut] = useState("")

  const clickHandler = (val) => {
      console.log(`btn value = ${val}`)

      if(val === "CE") {
          setOut("")
          setInp("")
      } else if (val === "C") {
          setInp("")
      } else if (val === "BS") {
           setInp(inp.substring(0,inp.length - 1))
      } else if (val === "1/x") {
         setOut(1/Number(inp))
      } else if (val === "sqr") {
         setOut(Math.pow(inp,2))
      } else if (val === "sqrt") {
          setOut(Math.sqrt(inp))
      } else if (val === "+/-") {
        setInp(Math.abs(inp))
      } else if (val === "=") {
        let res = eval(inp);
          setOut(res)
      } else {
        // assigning the button values to the inp state
          setInp(inp + val)
      }
  }
  
  return (
      <div className="calculator">
            <Display inp={inp} out={out} />
            <Keypad keys={keys} clickHandler={clickHandler} />
      </div>
  )
}

export default Calculator