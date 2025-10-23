import React from 'react'

// local variable
const x = 123;

export default class Page8 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num1: 12,
            num2: 44,
            str: "Welcome to states",
            isAdmin: true,
            colors: ["red", "green", "blue"],
            address: {
                city: "bengaluru",
                pincode: "560010"
            }
        };
        // property of class
        this.a = 0;

        // method binding
        this.addVal = this.addVal.bind(this);
    }

    addVal(val) {
        console.log(`btn clicked`)
        // this.a += val;
        this.setState({
            num1: this.state.num1 + val
        })
    }

    render() {
        console.log(`page 8 rendered`)
        return (
            <div>
                <h1>State in Class Component </h1>
                <h3> state num1 = { this.state.num1 } </h3>
                <h3> product = { this.state.num1 * this.state.num2 } </h3>

                <hr />

                <h3> product = { this.state.num1 * this.a } </h3>
                <h3> num1 = { this.state.num1 } a = { this.a } </h3>

                <button onClick={() => this.addVal(1)}  >Add+ 1</button>

                <hr />

                <h3> { this.state.str } </h3>
                <h3> { this.state.isAdmin ? "He is an admin": "He is User" } </h3>
                <hr />

                <h3> { this.state.address.city } and { this.state.address.pincode} </h3>
                <hr />

                <div>
                    { this.state.colors.map((item,index) => {
                        return (
                            <p key={index}> { item } </p>
                        )
                    })}
                </div>
            </div>
        )
    }
}