import React, { useCallback } from 'react'
import ShippingForm from './ShippingForm'

function post(url,data) {
    console.log(`/api/post/${url}`)
    console.log(data)
}

function ProductPage(props) {
    const { productId, referrerId, theme } = props

    const handleSubmit = useCallback((orderDetails) => {
        post(`https://sample.com/` + productId + "/buy", {
            referrerId,
            orderDetails
        })
    },[productId, referrerId])

  return (
    <div className="container" data-bs-theme={theme}>
        <div className="row">
            <ShippingForm submitHandler={handleSubmit} />
        </div>
    </div>
  )
}

export default ProductPage
