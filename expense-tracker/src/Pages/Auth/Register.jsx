import React from 'react'

function Register(props) {
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
                        <form method="post" autoComplete='off'>
                            <div className="form-group mt-2">
                                <label htmlFor="name">Your username</label>
                                <input type="text" name="user" id="user" className="form-control" required />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="email">Your email</label>
                                <input type="email" name="email" id="email" className="form-control" required />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="mobile">Your mobile</label>
                                <input type="number" name="mobile" id="mobile" className="form-control" required />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="pass">Your password</label>
                                <input type="password" name="pass" id="pass" className="form-control" required />
                            </div>
                            <div className="form-group mt-2">
                                <button type='submit' className="btn btn-success">Register User</button>
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
