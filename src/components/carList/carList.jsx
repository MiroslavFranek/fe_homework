import React from "react";
import "./carList.css"
import CarTile from "../carTile/carTile";

const CarList = (props) => {
    return (
        <>
            {props.marketData.map((cars, id) => {
                return <CarTile key={id} data={cars}/>
            })}
        </>
    )
}

export default CarList;