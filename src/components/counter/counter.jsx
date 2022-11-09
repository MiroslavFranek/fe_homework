import React, { useState } from "react";
import "./counter.css"

const Counter = (props) => {   
    const [count, setCount] = useState(0);
    const increment = () => {
        if (count < props.data.limit && (props.timeNow >= 6 && props.timeNow < 22)) {
            setCount(count + 1)
            props.parentCallbackCounter();
        }
    }
    
    return (
        <>
            <div className="counterTile" >
                <div className="text">
                    <h4>{props.data.name}</h4>
                    <h4>{count}</h4>
                </div>
                <button className="button" style={{backgroundColor: count === props.data.limit ? "red" : "mediumorchid" }} onClick={increment}>
                    <h3>+1</h3>
                </button>
            </div>
        </>
    )
}
export default Counter;
