import React, { createContext, useState } from 'react'

// context instance
export const AppContext = createContext()

// context provider
function AppProvider(props) {
  const [x,setX] = useState(10)
  const [y,setY] = useState(20)

  const [view,setView] = useState(false)
  const [isLogin,setIsLogin] = useState(false)

  const [users,setUsers] = useState(["aman", "sam", "harmit", "mark"])

  const [car,setCar] = useState({
      title: "Mahindra Thar",
      color: "red",
      make: 2025,
      type: "diesel"
  })

  return (
    <AppContext.Provider value={{ x, y, users, car, setX,setY, setUsers, setCar, view, setView, isLogin, setIsLogin }}>
            {
                props.children
            }
    </AppContext.Provider>
  )
}

export default AppProvider
