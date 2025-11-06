import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { validate } from '../../Util/validation';
import { ExpenseApi } from '../../API/ExpenseApi';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Register(props) {
    const navigate = useNavigate()

    const [user,setUser] = useState({
        name: "",
        email: "",
        mobile: "",
        password: ""
    })

    const [error,setError] = useState({
        nameErr: "",
        emailErr: "",
        mobileErr: "",
        passErr: ""
    })

    const readInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const resetHandler = () => {
        setUser({
        name: "",
        email: "",
        mobile: "",
        password: ""
    })
    }

    // submit handler
    const submitHandler = async (e) => {
            e.preventDefault(); // to avoid page refresh
            try {
               
            if(validate(user,setError)) {
                 console.log(`user =`, user)
                await axios.post(ExpenseApi.registerUser,user)
                      .then(res => {
                            toast.success(res?.data?.msg)
                            navigate(`/login`)
                      }).catch(err => toast.error(err?.response?.data?.msg))
            } else {
                toast.warning(`All fields must be properly filled before submission`)
            }
            
            } catch (error) {
                toast.error(error?.message)
            }
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h6 className="display-6 text-dark">
                    User Register
                </h6>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <form method="post" autoComplete='off' onSubmit={submitHandler} onReset={resetHandler}>
                            <div className="form-group mt-2">
                                <label htmlFor="name">Your name</label>
                                <input type="text" name="name" value={user?.name} onChange={readInput} id="name" className="form-control" />
                                {
                                    error?.nameErr && <span className="text-danger"> {error?.nameErr} </span> 
                                }
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="email">Your email</label>
                                <input type="email" name="email" value={user?.email} onChange={readInput} id="email" className="form-control"  />
                                 {
                                    error?.emailErr && <span className="text-danger"> {error?.emailErr} </span> 
                                }
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="mobile">Your mobile</label>
                                <input type="text" name="mobile" value={user?.mobile} onChange={readInput} id="mobile" className="form-control"  />
                                 {
                                    error?.mobileErr && <span className="text-danger"> {error?.mobileErr} </span> 
                                }
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="password">Your password</label>
                                <input type="password" name="password" value={user?.password} onChange={readInput} id="password" className="form-control"  />
                                 {
                                    error?.passErr && <span className="text-danger"> {error?.passErr} </span> 
                                }
                            </div>
                            <div className="form-group mt-2">
                                <button type='submit' className="btn btn-success">Register User</button>
                                <button type="reset" className="btn btn-danger float-end">Clear</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
