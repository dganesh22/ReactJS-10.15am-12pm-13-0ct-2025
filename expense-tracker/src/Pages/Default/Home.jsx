import React, { useState } from 'react'
import DisplayCard from '../../component/DisplayCard'
import Transactions from '../../component/Transactions'

function Home() {
  const [bal,setBal] = useState(0)
  const [incm,setIncm] = useState(0)
  const [exps,setExps]= useState(0)
  const [trns,setTrns] = useState([])


  return (
    <div className="container">
        <div className="row">
          <div className="col-md-12">
            <DisplayCard bal={bal} incm={incm} exps={exps} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ps-5 pe-5">
            <div className="card">
                <div className="card-body">
                  <Transactions/>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
