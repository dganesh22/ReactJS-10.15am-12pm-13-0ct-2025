import React, { memo, useState } from 'react'

const  ShippingForm = memo(function ShippingForm(props) {
    const {submitHandler } = props
    const [count,setCount] = useState(1)

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const orderDetails = {
            ...Object.fromEntries(formData),
            count
        };

        submitHandler(orderDetails)
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <b>Note: <code>Shipping Form</code> is artificially slowed down..! </b>
            </p>
            
            <div className="form-group mt-2">
                <label>Number of Items:</label>
                <span className="text-danger">-</span>
                <strong> { count } </strong>
                <span className="text-success">+</span>
            </div>

            <div className="form-group mt-2">
                <label>Street</label>
                <input type="text" name="street" id="street" className="form-control" required />
            </div>

            <div className="form-group mt-2">
                <label>City</label>
                <input type="text" name="city" id="city" className="form-control" required />
            </div>
            <div className="form-group mt-2">
                <label>Postal Code</label>
                <input type="number" name="postal" id="postal" className="form-control" required />
            </div>
            <div className="form-group mt-2">
                <button className="btn btn-success">Submit</button>
            </div>
        </form>
    )

}) 

export default ShippingForm
