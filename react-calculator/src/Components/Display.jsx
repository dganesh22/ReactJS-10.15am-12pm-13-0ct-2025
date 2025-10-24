import React from 'react'

function Display(props) {
    const { inp, out } = props

    return (
        <div className="display">
            <h5> { out ? out : "0.0"} </h5>
            <p> { inp ? inp : "0"} </p>
        </div>
    )
}

export default Display