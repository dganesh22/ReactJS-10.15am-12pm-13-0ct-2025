import axios from 'axios'
import React, { createContext, useEffect, useState} from 'react'
import { ExpenseApi } from '../API/ExpenseApi'
import { toast } from 'react-toastify'

// reac context ref
export const AuthContext = createContext()


function AuthProvider(props) {
    const [token,setToken] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    const [user,setUser] = useState(null)

    // token verification
    const getAuthUser = async () => {
          await axios.get(ExpenseApi?.verifyUser, {
              headers: {
                Authorization: `${token || sessionStorage.getItem("token")}`,
                "Content-Type": "application/json"
              }
          }).then(res => {
              toast.success(res?.data?.msg)
              setUser(res?.data?.user)

          }).catch(err => toast.error(err?.response?.data?.msg))
    }


    useEffect(() => {

      if(sessionStorage.getItem("token")) {
          setIsLogin(true)
          setToken(sessionStorage.getItem("token"))

           return () => {
            getAuthUser()
          }
      }
    },[])


  return (
    <AuthContext.Provider value={{ token, setToken, isLogin, setIsLogin, user,setUser }}>
            {
                props.children
            }
    </AuthContext.Provider>
  )
}

export default AuthProvider
