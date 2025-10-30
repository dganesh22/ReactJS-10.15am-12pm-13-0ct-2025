import React from "react";
import ReactDOM from 'react-dom/client'
import Counter from "../Component/Counter";

const Page5 = (props) => {
  let root = "";

  const mount = () => {
    console.log(`component mounted`)
      root = ReactDOM.createRoot(document.getElementById("renderHere"))
     root.render(
       <React.StrictMode>
            <Counter root={root} num={0} />
      </React.StrictMode>
     )
  }

  const unmount = () => {
    console.log(`component unmounted`)
    root.unmount()
  }

  return (
    <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
              <h6 className="display-6 text-success">useEffect(Lifecycle)</h6>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
              <button onClick={mount} className="btn btn-success">Mount</button>
              <button onClick={unmount} className="btn btn-danger float-end">UnMount</button>
          </div>
        </div>

        <div id="renderHere"></div>
    </div>
  )
}

export default Page5
