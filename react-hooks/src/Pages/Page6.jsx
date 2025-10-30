import React, { useState } from "react";
import ProductPage from "../Component/ProductPage";

const Page6 = (props) => {
  const [isDark,setIsDark] = useState(false)

  return (
    <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h6 className="display-6 text-success">Performance Hooks</h6>
            <p>Performance hooks are common way to optimize the re-rendering performance of component is to skip unnecessary work. </p>

            <hr />

            <h6 className="display-6 text-warning">useCallback</h6>
            <p>useCallback is a react hook that lets you cache a function definition between re-renders </p>
            <p>Note: React Compiler automatically memorizes values and functions, reducing the need for manual useCallback calls. You can use the compiler to handle memroization automatically. </p>
            <strong>Usage</strong>
            <ol>
              <li>Skipping re-rendering of components</li>
              <li>Updating state from a memorized callback</li>
              <li>Preventing an effect from firing too often</li>
              <li>Optimizing a custom hook</li>
            </ol>
          </div>
        </div>
        <hr />

        <ProductPage
            referrerId="wizartd_of_world"
            productId={12345}
            theme={isDark ? "dark" : "light"}
        />
    </div>
  )
}

export default Page6
