import React, { Component } from 'react'

export class ProductCard extends Component {
    constructor(props) {
        super(props)
    }


  render() {
    const { id, title, image, price } = this.props
    return (
      <div>
            <img src={image} alt="no image found" />
            <div>
                <h3> { title } </h3>
                <h4> Price:  &#8377; { price } </h4>
            </div>
      </div>
    )
  }
}

export default ProductCard
