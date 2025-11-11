import React from 'react'
import ExpenseChart from './ExpenseChart'

function DisplayCard(props) {
    const { bal, incm, exps } = props
  return (
    <div className="container">
         <div className="row p-4">
            <div className="col-md-8 d-flex flex-md-row flex-column gap-2">
                <div className="card w-100">
                    <div className="card-body text-primary">
                        <h6>
                           <i className="bi bi-wallet"></i> Balance</h6>
                        <h2 className="float-end"> &#8377; {bal} </h2>
                    </div>
                </div>
                <div className="card w-100">
                    <div className="card-body text-success">
                        <h6>
                           <i className="bi bi-arrow-up"></i> Income</h6>
                        <h2 className="float-end"> &#8377; { incm } </h2>
                    </div>
                </div>
                <div className="card w-100">
                    <div className="card-body text-danger">
                        <h6>
                           <i className="bi bi-arrow-down"></i> Expense</h6>
                        <h2 className="float-end"> &#8377; { exps } </h2>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mt-sm-2">
                <div className="card">
                    <div className="card-body">
                        <ExpenseChart incm={incm} exps={exps} bal={bal} />
                    </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default DisplayCard
