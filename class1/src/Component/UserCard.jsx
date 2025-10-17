import React, { Component } from 'react'

export class UserCard extends Component {
    constructor(props) {
        super(props)
    }

    
  render() {
    const { id, name, email, bank } = this.props
    return (
      <div>
            <h2>User Card</h2>
            <h3> { id } { name } </h3>
            <h4> { email } </h4>
            <hr />
            <h4>Bank</h4>
            <h5> { bank?.accNo} </h5>
            <h5> { bank?.branch} </h5>
      </div>
    )
  }
}

export default UserCard
