import React from 'react'
import Calculator from './Pages/Calculator'

function App(props) {
  return (
      <div className="container">
          <div className="title">
              <h1>React-Calculator</h1>
          </div>
        <Calculator/>
      </div>
  )
}

export default App