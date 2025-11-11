import React from 'react'
import { useNavigate } from 'react-router'
import { ExpenseApi } from '../API/ExpenseApi'
import useAuth from '../Hook/useAuth'
import { toast } from 'react-toastify'
import axios from 'axios'

function Transactions(props) {
  const { transData, readTransactions } = props
  const navigate = useNavigate()
  const { token } = useAuth()

  const editHandler = (id) => {
      // navigate(`/form?id=${id}&edit=${true}`)
      navigate(`/edit/${id}`)
  }

  // delete handler
  const deleteHandler = async (id) => {
      if(window.confirm(`Are you sure to delete transction?`)) {
        await axios.delete(ExpenseApi?.deleteTransaction(id), {
            headers: {
              Authorization: token
            }
          }).then(res => {
              toast.success(res?.data?.msg)
              readTransactions()
          }).catch(err => {
            toast.error(err?.response?.data?.msg)
          })
      }
  }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h6 className="text-success">Transactions</h6>
            </div>
        </div>

        <div className="row">
          <div className="col-md-12">
              <ul className="list-group">
                  {
                      transData?.map((item,index) => {
                        return (
                          <li key={index} className='list-group-item d-flex align-items-center justify-content-between'>
                              <strong> { item?.title } </strong>
                              <div className='d-flex align-items-center'>
                                <span className="float-end"> &#8377; { item?.amount } </span>
                                <div className="btn-group">
                                    <button onClick={() => editHandler(item?._id)} className="btn btn-link text-primary">
                                        <i className="bi bi-pencil"></i>
                                    </button>
                                    <button onClick={() => deleteHandler(item?._id)} className="btn btn-link text-danger">
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </div>
                              </div>
                          </li>
                        )
                      })
                  }
              </ul>
          </div>
        </div>
    </div>
  )
}

export default Transactions
