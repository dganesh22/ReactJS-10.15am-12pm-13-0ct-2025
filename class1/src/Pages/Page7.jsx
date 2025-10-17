import React, { Component } from 'react'
import { products } from '../methods/data'
import ProductCard from '../Component/ProductCard'

export default class Page7 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3> Products </h3>
                <section>
                    {
                        products?.map((item,index) => {
                            return (
                                <ProductCard key={index} { ...item } />
                            )
                        })
                    }
                </section>
            </div>
        )
    }
}