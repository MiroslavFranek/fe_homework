import React from "react";
import "./carTile.css"

const CarTile = (props) => {
    return (
        <div className="carTiles">
            <h2>{props.data.manufacturer} {props.data.model}</h2>
            <h4>Price: {props.data.price}</h4>
            <h4>Fuel: {props.data.fuel}</h4>
        </div>
    )
}

export default CarTile;