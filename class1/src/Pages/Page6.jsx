import React, { Component } from 'react'
import { users } from '../methods/data';
import UserCard from '../Component/UserCard';

// variables
let a = 132;
let b = 556;

let str = "This is string input";
let isAdmin = false;

let names = ["John", "Mark", "Sam", "Tom"]




class Page6 extends Component {
    constructor(props) {
        super(props)
    }   

    render() {
        return (
            <div>
                <h1>Variables in class Components</h1>
                <h4> a = { a } and b = { b } </h4>
                <h4> { str } </h4>

                <hr />

                <h4>  boolean = { isAdmin ? "Say true": "Say False" } </h4>

                <hr />

                <div>
                    {
                        names.map((item,index) => {
                            return (
                                <p key={index}> { item } </p>
                            )
                        })
                    }
                </div>

                <hr />

                <section>
                    {
                        users?.map((item,index) => {
                            return (
                                <div key={index}>
                                    <h3> { item?.id } { item?.name } </h3>
                                    <h4> { item?.email } </h4>
                                </div>
                            )
                        })
                    }
                </section>

                <hr />

                <section>
                    {
                        users?.map((item,index) => {
                            return (
                                <UserCard key={index} {...item} />
                            )
                        })
                    }
                </section>
            </div>
        )
    }
}

export default Page6