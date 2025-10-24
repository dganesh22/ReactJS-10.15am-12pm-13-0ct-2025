import React from "react";
import Key from "./Key";

function Keypad(props) {
    const { keys } = props 

    return (
        <div className="keypad">
            {
                keys?.map((item,index) => {
                    return (
                        <Key key={index} val={item} clickHandler={props.clickHandler} />
                    )
                })
            }
        </div>
    )
}

export default Keypad