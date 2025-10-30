import React, { useState } from "react";

const Page1 = (props) => {
   // const [state,handler] = useState(value)

   const [num,setNum] = useState(0)

   const addValue = (val) => {
    setNum(num + val)
   }
   

  return (
    <div className="container">
        <h1 className="display-1 text-success text-center">useState</h1>
        <h3> num = { num } </h3>
        <button onClick={() => setNum(num + 10)} className="btn btn-success">Add + 10 </button>

        <button onClick={() => addValue(25)} className="btn btn-danger">Add + 25</button>
    </div>
  )
}

export default Page1
