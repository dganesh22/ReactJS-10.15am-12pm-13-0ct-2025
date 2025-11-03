import React, { useContext } from 'react'
import { AppContext } from '../Context/AppProvider'

function Page8() {
  const { x, y , users, car, setX, setY  } = useContext(AppContext)

  const incHandler = () => {
    setX(x + 1)
    setY(y + 1)
  }

  return (
    <div className="container">
         <div className="row"> 
          <div className="col-md-12 text-center">
              <h6 className="display-6 text-success">useContext</h6>
          </div>
         </div>

         <div className="row">
          <div className="col-md-12">
            <h4> x = { x } and y = { y } </h4>
            <button onClick={incHandler} className='btn btn-primary' >Add Value</button>
          </div>
         </div>

         <div className="row">  
          <div className="col-md-12">
              <ol className='list-group'>
                {
                    users?.map((item,index) => {
                      return (
                        <li className='list-group-item' key={index}> { item } </li>
                      )
                    })
                }
              </ol>
          </div>
         </div>

         <div className="row">
          <div className="col-md-12">
              <h4> car title = { car.title } color = { car.color } year = { car.make } type = { car.type } </h4>
          </div>
         </div>
    </div>
  )
}

export default Page8
