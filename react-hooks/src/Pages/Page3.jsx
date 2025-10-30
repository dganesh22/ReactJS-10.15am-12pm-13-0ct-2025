import React, { useRef } from "react";

const Page3 = (props) => {
  const fUser = useRef("")

  const submitHandler = async (e) => {
      e.preventDefault(); // to avoid page refresh on event execution
      let user = fUser.current.value;
      console.log(`username = `, user)
  }

  return (
    <div className="container">
       <div className="row">
        <div className="col-md-12">
             <h1 className="display-1 text-success text-center">useRef</h1>
        </div>
       </div>

       <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">        
                <form method="post" onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="user">Your username</label>
                        <input type="text" name="user" id="user" ref={fUser} className="form-control" required />
                    </div>

                    <div className="form-group mt-2">
                        <button type="submit" className="btn btn-success">Send</button>
                    </div>
                </form>
              </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Page3
