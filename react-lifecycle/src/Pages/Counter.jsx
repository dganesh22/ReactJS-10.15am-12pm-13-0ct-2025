import React, { Component } from 'react'


export default class Counter extends Component {
        constructor(props) {
            super(props)
            this.state = {
                view: false
            }
            console.log(`constructor called  state= ${this.state.view} and props = ${this.props.num}`)
        }

        static getDerivedStateFromProps(p,s) {
            console.log(`get Derived state from props state= ${s.view} and props = ${p.num}`)
        }

        // custom method
        addValue(val) {
            this.props.root.render(
                <React.StrictMode>
                        <Counter num={this.props.num + val } root={this.props.root} />
                </React.StrictMode>
            )
        }

        componentDidMount() {
            console.log(`component didmount called  state= ${this.state.view} and props = ${this.props.num}`)
        }

        shouldComponentUpdate(p,s) {
            console.log(`should component update or not? state= ${s.view} and props = ${p.num}`)
            return true;
        }

        // pre commit phase - update
        getSnapshotBeforeUpdate(oP,oS) {
            console.log(`get snapshot before update oldState= ${oS.view} and oldProps = ${oP.num}`)
        }

        componentDidUpdate(oP,oS) {
            console.log(`component did update oldState= ${oS.view} and oldProps = ${oP.num}`)
        }
        

        render() {
            console.log(`counter rendred with state= ${this.state.view} and props = ${this.props.num}`)
            return (
                <div className="container">
                    <div className="row">
                        <h1> Counter </h1>
                        <h2> num = { this.props.num } </h2>
                    </div>

                    <div className="row">
                        {
                            this.state.view ? (
                                <h1>React Lifecycle Completed</h1>
                            ): (
                                <div>
                                    <h3>Need More counts</h3>
                                    <button onClick={() => this.addValue(1)} className="btn">Add + 1</button>
                                </div>
                            )
                        }
                    </div>
                </div>
            )
        }
}
