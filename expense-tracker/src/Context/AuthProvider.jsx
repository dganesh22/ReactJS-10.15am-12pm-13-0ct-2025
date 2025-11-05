import React, { createContext, useState} from 'react'

// reac context ref
export const AuthContext = createContext()


function AuthProvider(props) {
    const [token,setToken] = useState(false)
    const [isLogin, setIsLogin] = useState(false)

  return (
    <AuthContext.Provider value={{ token, setToken, isLogin, setIsLogin }}>
            {
                props.children
            }
    </AuthContext.Provider>
  )
}

export default AuthProvider
