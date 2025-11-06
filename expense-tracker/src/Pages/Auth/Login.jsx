import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { loginValidate } from '../../Util/validation';
import { ExpenseApi } from '../../API/ExpenseApi';
import axios from 'axios';
import { useNavigate } from 'react-router';
import useAuth from '../../Hook/useAuth';


function Login(props) {
    const { setIsLogin, setToken } = useAuth()
     const navigate = useNavigate()

    const [user,setUser] = useState({
        email: "",
        password: ""
    })

    const [error,setError] = useState({
        emailErr: "",
        passErr: ""
    })

    const readInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const resetHandler = () => {
        setUser({
        email: "",
        password: ""
    })
    }

    // submit handler
    const submitHandler = async (e) => {
            e.preventDefault(); // to avoid page refresh
            try {
               
            if(loginValidate(user,setError)) {
                 console.log(`user =`, user)
                await axios.post(ExpenseApi.loginUser,user)
                      .then(res => {
                            toast.success(res?.data?.msg)
                            setIsLogin(true)
                            setToken(res?.data?.loginToken)
                            sessionStorage.setItem("token", res?.data?.loginToken)
                            navigate(`/`)
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
                    User Login
                </h6>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <form method="post" autoComplete='off' onSubmit={submitHandler} onReset={resetHandler}>
                           <div className="form-group mt-2">
                                <label htmlFor="email">Your email</label>
                                <input type="email" name="email" value={user?.email} onChange={readInput} id="email" className="form-control"  />
                                 {
                                    error?.emailErr && <span className="text-danger"> {error?.emailErr} </span> 
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
                                <button type='submit' className="btn btn-success">Login User</button>
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

export default Login
