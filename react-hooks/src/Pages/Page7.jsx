import React, { useState } from 'react'
import Todo from '../Component/Todo'
import { createTodos } from '../data/TodoData'

const Page7 = () => {
  const [tab,setTab] = useState("all")

  return (
    <div className='container'>
       <div className="row">
        <div className="col-md-12 text-center">
            <h6 className="display-6 text-success">useMemo Hook</h6>
        </div>
       </div>

       <div className="row">
        <div className="col-md-12">
            <div className="btn-group gap-3">
              <button onClick={() => setTab("all")} className="btn btn-dark">All</button>
              <button onClick={() => setTab("active")} className="btn btn-success">Active</button>
              <button onClick={() => setTab("completed")} className="btn btn-danger">Completed</button>
            </div>
        </div>
       </div>

       <Todo todos={createTodos()} tab={tab} />
    </div>
  )
}

export default Page7
