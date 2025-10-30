import React, { useEffect, useState } from 'react'

function Counter(props) {
    const [view,setView] = useState(false)

    const numHandler = () => {
        props.root.render(
            <React.StrictMode>
                    <Counter root={props.root} num={props.num + 1} />
            </React.StrictMode>
        )
    }

    console.log(`counter rendered state=${view} and props = ${props.num}`)

    useEffect(function() {
            console.log(`use effect state=${view} and props = ${props.num}`)

            if(props.num >= 5) {
                setView(true)
            }
            
            return () => {
                console.log(`counter component unmounted`)
            }
    },[view,props.num])

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h6 className="display-6 text-danger">Counter</h6>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
               {
                    view ? (
                        <div>
                            <h1 className="text-success display-2">
                                React Lifecycle completed
                            </h1>
                        </div>
                    ):  (
                        <div>
                             <h3 className="display-4 text-success">Num = { props.num } </h3>
                    <button onClick={numHandler} className="btn btn-success">
                        Add + 1 </button>
                        </div>
                    )
               }
            </div>
        </div>
    </div>
  )
}

export default Counter
