import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { ExpenseApi } from '../../API/ExpenseApi';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import useAuth from '../../Hook/useAuth';

function ExpenseForm() {
  const [trans,setTrans] = useState({
      title: "",
      amount: 0
  })
  const navigate = useNavigate()
  const { token } = useAuth()
  const params = useParams()

  const readTrans = async () => {
      await axios.get(ExpenseApi?.singleTransaction(params?.transId), {
          headers: {
              Authorization: token
          }
      }).then(res => {
          setTrans(res?.data?.transaction)
      }).catch(err => {
          toast.error(err?.response?.data?.msg)
        })
  }

  useEffect(() => {
      if(params?.transId) {
          readTrans()
        }
      },[])

  const readInput = (e) => {
      const { name, value } = e.target
      setTrans({...trans, [name]: value })
  }

  const submitHandler= async (e) => {
      e.preventDefault();
      try {
        console.log(`transaction = `, trans)
      
        if(params?.transId) {
            // update
          await axios.put(ExpenseApi?.updateTransaction(params?.transId),trans, {
                headers: {
                  Authorization: token
                }
              }).then(res => {
                  toast.success(res?.data?.msg)
                  navigate(`/`)
                })
                .catch(err => {
                  toast.error(err?.response?.data?.msg)
                });
        } else {
          // add
          await axios.post(ExpenseApi?.addTransaction,trans, {
              headers: {
                Authorization: token
              }
            }).then(res => {
                toast.success(res?.data?.msg)
                navigate(`/`)
              })
              .catch(err => {
                toast.error(err?.response?.data?.msg)
              });
        }

      } catch (err) {
        toast.error(err?.message)
      }
  }

  return (
    <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
              <h6 className="display-6 text-success">Expense Form</h6>
              {
                  params?.transId ? (<span> {params?.transId} </span>) : null 
              }
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <form method='post' onSubmit={submitHandler}>
                    <div className="form-group mt-2">
                        <label htmlFor="title">Transaction title</label>
                        <input type="text" name="title" value={trans?.title} onChange={readInput} id="title" className="form-control" required
                         />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="amount">Transaction Amount</label>
                        <input type="number" name="amount" value={trans?.amount} onChange={readInput} id="amount" className="form-control" required />
                    </div>
                    <div className="form-group mt-2">
                        <button type="submit" className="btn btn-outline-success">
                            {
                               params?.transId ? "Update Transaction": "Add Transaction"
                            }
                        </button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ExpenseForm
