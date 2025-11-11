import React, { useState, useEffect } from 'react'
import DisplayCard from '../../component/DisplayCard'
import Transactions from '../../component/Transactions'
import { ExpenseApi } from '../../API/ExpenseApi'
import axios from 'axios'
import { toast } from 'react-toastify'
import useAuth from '../../Hook/useAuth'
import { NavLink } from 'react-router'


function Home() {
  const [bal,setBal] = useState(0)
  const [incm,setIncm] = useState(0)
  const [exps,setExps]= useState(0)
  const [trns,setTrns] = useState([])

  const { token } = useAuth()


  const readTransactions = async () => {
      await axios.get(ExpenseApi?.allTransaction,{
          headers: {
              Authorization: token
          }
      }).then(res => {
        console.log(`all trans =`, res?.data)
        setTrns(res?.data?.transactions)
        displayTrans(res?.data?.transactions)
      })
      .catch(err => {
        toast.error(err?.response?.data?.msg)
      })
  }

  // to display income expense balance
  const displayTrans = (transacs) => {
          let amounts = transacs.map((item,index) => Number(item.amount))

        let income = amounts.filter(item=> item > 0).reduce((ac,cu) => ac + cu, 0).toFixed(2);
        let expense = amounts.filter(item=> item < 0).reduce((ac,cu) => ac + cu, 0) * -1;

        let balance = income - expense;
                   
          setIncm(income)
          setExps(expense)
          setBal(balance)
  }

  


  useEffect(() => {
        readTransactions()
        
        return () => {  
         
        }
  },[])


  return (
    <div className="container">
        <div className="row">
          <div className="col-md-12 ps-5 pe-5 pt-2">
              <NavLink to={`/newexpense`} className="btn btn-outline-success float-end"> 
                <i className="bi bi-plus-circle"></i> Add Transaction</NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <DisplayCard bal={bal} incm={incm} exps={exps} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ps-5 pe-5">
            <div className="card">
                <div className="card-body">
                  <Transactions transData={trns} readTransactions={readTransactions} />
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
