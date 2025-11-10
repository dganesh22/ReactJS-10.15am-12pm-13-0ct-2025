import React from 'react'

function Transactions(props) {
  const { transData } = props

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
                                    <button className="btn btn-link text-primary">
                                        <i className="bi bi-pencil"></i>
                                    </button>
                                    <button className="btn btn-link text-danger">
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
