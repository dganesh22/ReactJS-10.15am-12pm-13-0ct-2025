import React from 'react'

function Key(props) {
    return (
        <div className="btn" onClick={() => props.clickHandler(props.val)}>
            { props.val }
        </div>
    )
}

export default Key