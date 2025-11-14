import React from 'react'
import { NavLink  } from 'react-router'

function UserCard(props) {
    const { _id, name, email, mobile, isActive, deleteHandler } = props

  return (
    <div className="col-md-4 col-lg-3 col-sm-6">
        <div className="card mt-2">
            <div className="card-header text-center bg-dark">
                <h5 className="card-title text-white"> { name } </h5>
            </div>
            <div className="card-body">
                <p className="p-2">
                    <strong> <i className="bi bi-envelope"></i> </strong>
                    <span className="text-success float-end"> { email } </span>
                </p>
                <p className="p-2">
                    <strong> <i className="bi bi-phone"></i> </strong>
                    <span className="text-success float-end"> { mobile } </span>
                </p>
            </div>
            <div className="card-footer">
                <NavLink to={`/edit/${_id}`} className="btn btn-sm btn-outline-info">
                    <i className="bi bi-pencil"></i>
                </NavLink>
                <button onClick={() => deleteHandler(_id)} className="btn btn-sm btn-outline-danger float-end">
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        </div>
    </div>
  )
}

export default UserCard
