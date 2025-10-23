import React, { useState } from 'react'
import { users } from '../methods/data'
import UserCard from '../Component/UserCard'

/* 
    1. state hook - useState, useReducer
    2. ref hook - useRef
    3. performance - useMemo, useCallback
    4. effect hook - useEffect, useImperativeHandle,useLayoutEffect
    5. context hook - useContext
    6. other hook - 
*/

function Page9(props) {
   // const [state,handler] = useState(value)
   const [num,setNum] = useState(0)
   const [name,setName] = useState("")
   const [user,setUser] = useState("John")
   const [colors,setColors] = useState(["blue", "red", "black"])

   const [view,setView] = useState(false)

   

    return (

        <div>
            <h1>State in functional component </h1>
            <h2> number = { num } </h2>
            <hr />
            <button onClick={() => setNum(num + 1)} >Add + 1</button>
            <button onClick={() => setNum(num + 5)} >Add + 5</button>
            <button onClick={() => setNum(num + 10)} >Add + 10</button>

            <div>
                {
                    view ? (
                        <div>
                            <h1>Login Window</h1>
                            <form action="">
                                <div>
                                    <label htmlFor="user">username</label>
                                    <input type="text" name="user" id="user" required />
                                </div>
                                <div>
                                    <label htmlFor="pass">Password</label>
                                    <input type="password" name="pass" id="pass" required />
                                </div>

                                <div>
                                    <input type="submit" value="Login" />
                                    <input type="reset" value="Clear" />
                                </div>
                            </form>
                            <button onClick={() => setView(!view)} > { view ? "Register Here": "Login Here"} </button>
                        </div>
                    ) : (
                        <div>
                            <h1>Register Window</h1>
                             <form action="">
                                <div>
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" name="name" id="name" required />
                                </div>
                                <div>
                                    <label htmlFor="user">username</label>
                                    <input type="text" name="user" id="user" required />
                                </div>
                                <div>
                                    <label htmlFor="pass">Password</label>
                                    <input type="password" name="pass" id="pass" required />
                                </div>
                                <div>
                                    <label htmlFor="confirmPass">Confirm Password</label>
                                    <input type="password" name="confirmPass" id="confirmPass" required />
                                </div>

                                <div>
                                    <input type="submit" value="Register" />
                                    <input type="reset" value="Clear" />
                                </div>
                            </form>
                            <button onClick={() => setView(!view)} > { view ? "Register Here": "Login Here"} </button>
                        </div>
                    )
                }
            </div>

            <hr />

            <section>
                {
                    users.map((item,index) => {
                        return (
                            <UserCard key={index} {...item} />
                        )
                    })
                }
            </section>
        </div>
    )
}

export default Page9