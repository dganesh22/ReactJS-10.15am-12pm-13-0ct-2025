// local variables
import React from 'react'

import { product, rem } from '../methods/fun';
import Card from '../Component/Card';

// private
const x = 12;
let y = 44;

const str = "Welcome to Reactjs"

let colors= ["red", "green", "blue"]

let user = {
    name: "john",
    age: 22,
    email: "john@gmail.com",
    address: {
        city: "bengaluru",
        pincode: "560010"
    }
}


function MyPage5(props) {

    let a = 55;
    let b = 25;
    
    return (
        <div>
            <h4>Variables</h4>
            <h5> x = { x } and y = { y } </h5>
            <h5> a = { a } and b = { b } </h5>
            <hr />

            <h5> sum = { x + b } </h5>

            <h4> product = { product(x,y) } </h4>
            <h4> rem = { rem(a,x) } </h4>

            <hr />

            <h4> { str } </h4>

            <hr />

            <ul>
                {
                    colors.map(function(item,index){
                        return (
                            <li key={index}> { item } </li>
                        )
                    })
                }
            </ul>

            <Card {...user}  />
        </div>
    )
}

export default MyPage5