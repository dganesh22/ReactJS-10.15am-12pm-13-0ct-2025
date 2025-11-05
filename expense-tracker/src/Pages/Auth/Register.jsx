import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { validate } from '../../Util/validation';

function Register(props) {
    const [user,setUser] = useState({
        name: "",
        email: "",
        mobile: "",
        pass: ""
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
        pass: ""
    })
    }

    // submit handler
    const submitHandler = async (e) => {
            e.preventDefault(); // to avoid page refresh
            try {
               
            if(validate(user,setError)) {
                 console.log(`user =`, user)
            } else {
                console.log(`error submitting form`)
            }
            
            } catch (error) {
                toast.error(err?.message)
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
                                <input type="number" name="mobile" value={user?.mobile} onChange={readInput} id="mobile" className="form-control"  />
                                 {
                                    error?.mobileErr && <span className="text-danger"> {error?.mobileErr} </span> 
                                }
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="pass">Your password</label>
                                <input type="password" name="pass" value={user?.pass} onChange={readInput} id="pass" className="form-control"  />
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
