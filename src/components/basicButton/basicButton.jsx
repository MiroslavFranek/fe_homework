import React from "react";
import "./basicButton.css"


const BasicButton = (props) => {
    return (
        <>
            <button className="buttonStyle"onClick = {props.onClick}>{props.text}</button>
        </>
    )
}

export default BasicButton;