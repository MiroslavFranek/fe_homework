import React from "react";
import "./carTile.css"

const CarTile = (props) => {
    return (
        <div className="carTiles">
            <h2 className="carText">{props.data.manufacturer} {props.data.model}</h2>
            <h4 className="carText">Price: {props.data.price} czk</h4>
            <h4 className="carText">Milage: {props.data.milage} km</h4>
            <h4 className="carText">Fuel: {props.data.fuel}</h4>
        </div>
    )
}

export default CarTile;