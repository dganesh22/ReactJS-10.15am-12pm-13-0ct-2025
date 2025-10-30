import React, { useReducer } from "react";

// reducer logic
const numReducer = (state,action) => {
   switch(action) {
      case "increment": 
      return {
        num: state.num + 1
      }

      case "decrement":
        return {
          num: state.num - 1
        }

      case "clear": 
        return {
          num: 0
        }

      default: alert("invalid input")
   }
}

const Page2 = function (props) {
  // const [state,dispatcher] = useReducer(reducer,initial_state)
 const [state,dispatcher] = useReducer(numReducer, { num: 0 })

  return (
    <div className="container">
        <h1 className="display-1 text-success text-center">useReducer</h1>
        <h3> state = { state.num } </h3>

        <hr />

        <button onClick={() => dispatcher("increment")} className="btn btn-primary">Increment</button>
        <button onClick={() => dispatcher("decrement")} className="btn btn-warning">Decrement</button>
        <button onClick={() => dispatcher("clear")} className="btn btn-danger">Clear</button>
    </div>
  )
}

export default Page2
