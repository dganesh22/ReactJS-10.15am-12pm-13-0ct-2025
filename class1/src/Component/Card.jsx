import React from 'react'

export default function Card(props) {
    const { age, email, address } = props
    
    return (
        <div>
            <h3> { props.name } </h3>
            <h4> age = { age } years </h4>
            <h4> { email } </h4>
            <h4> address </h4>
                <h5> { address.city } </h5>
                <h5> { address.pincode } </h5>
        </div>
    )
}

