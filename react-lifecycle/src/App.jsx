import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './Pages/Counter'

export default class App extends Component {
    constructor(props) {
      super(props)
      this.root = ""
      this.unMountComponent = this.unMountComponent.bind(this)
    }

    mountComponent() {
      console.log(`component mounted`)
      this.root = ReactDOM.createRoot(document.getElementById("renderHere"))
      this.root.render(
        <React.StrictMode>
              <Counter num={0} root={this.root} />
        </React.StrictMode>
      )
    }

    unMountComponent() {
      console.log(`component unmounted`)
      this.root.unmount()
    }
    
    render() {
      return (
        <div className="container">
            <div className="title">
                <h1>React-Lifecycle</h1>
            </div>

            <div className="row">
                <div className="btn-group">
                      <button onClick={this.mountComponent.bind(this)} className="btn success">Mount</button>
                      <button onClick={() => this.unMountComponent()} className="btn danger">UnMount</button>
                </div>
            </div>

            <section id="renderHere"></section>
        </div>
      )
    }
}