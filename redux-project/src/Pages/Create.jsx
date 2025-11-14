import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addNewUser} from '../Redux/Actions/UserAction'
import { useNavigate } from 'react-router'

function Create() {
  const [user,setUser] = useState({
      name: "",
      email: "",
      mobile: ""
  })
  const dispatch = useDispatch() // dispatcher object
  const navigate =useNavigate() //  router object

  const readInput = (e) => {
      const { name, value }= e.target
      setUser({...user, [name]: value })
  }

  const submitHandler = async (e) => {
      e.preventDefault();
        try {
            console.log(`new user =`, user)
            await dispatch(addNewUser(user))
              .unwrap()
              .then(res => {
                toast.success(res?.msg)
                navigate(`/`)
              })
              .catch(err => toast.error(err?.response?.msg))
        } catch (err) {
          toast.error(err?.message)
        }
  }

  const resetHandler = async (e) => {
      e.preventDefault();
        try {
            setUser({
              name: "",
              email: "",
              mobile: ""
            })
        } catch (err) {
          toast.error(err?.response?.data?.msg)
        }
  }

  return (
    <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h6 className="display-6 text-dark">Create</h6>
          </div>
        </div>

        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                  <div className="card-body">
                    <form method="post" onSubmit={submitHandler} onReset={resetHandler}>
                        <div className="form-group mt-2">
                            <label htmlFor="name">Your name</label>
                            <input type="text" name="name" value={user?.name} onChange={readInput} id="name" className="form-control" required />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="email">Your email</label>
                            <input type="email" name="email" value={user?.email} onChange={readInput} id="email" className="form-control" required />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="mobile">Your Mobile</label>
                            <input type="number" name="mobile" value={user?.mobile} onChange={readInput} id="mobile" className="form-control" required />
                        </div>
                        <div className="form-group mt-2">
                              <button type='submit' className="btn btn-outline-success"> 
                                <i className="bi bi-plus-circle"></i> Add User</button>
                              <button type='reset' className="btn btn-outline-danger float-end">
                                <i className="bi bi-x-circle"></i> Clear</button>
                        </div>
                    </form>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Create
