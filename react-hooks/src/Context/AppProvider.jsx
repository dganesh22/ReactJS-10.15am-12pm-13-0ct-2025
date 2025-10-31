import React, { createContext } from 'react'

// context instance
export const AppContext = createContext()

// context provider
function AppProvider(props) {
  return (
    <AppContext.Provider value={{ }}>
            {
                props.children
            }
    </AppContext.Provider>
  )
}

export default AppProvider
