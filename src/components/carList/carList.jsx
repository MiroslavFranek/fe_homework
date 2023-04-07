import React, { useState } from "react";
import "./carList.css"
import CarTile from "../carTile/carTile";
import BasicButton from "../basicButton/basicButton.jsx";
import Modal from "../modal/modal.jsx";

const CarList = (props) => {
    const [brand, setBrand] = useState()
    const [model, setModel] = useState()
    const [fuel, setFuel] = useState()
    const [openModal, setOpenModal] = useState(false)
    const handleFilter = (value)=>{
        setBrand(value[0])
        setModel(value[1])
        setFuel(value[2])
    }
    return (
        <>
            <div className="container">
                <div className="filterDetails">
                    <BasicButton onClick={() => { setOpenModal(true) }} text="Filtrovat" />
                    <p>Manufacturer: {brand}</p>
                    <p>Model: {model}</p>
                    <p>666-6666 czk</p>
                    <p>666-666666 km</p>
                    <p>Fuel: {fuel}</p>
                </div>
                <div className="carList">
                    {props.marketData.filter(function(i,n){return i.manufacturer===brand}).map((cars, id) => {
                        return <CarTile key={id} data={cars} className="carTile" />
                    })}
                </div>
            {openModal && <Modal openModal={setOpenModal} marketData={props.marketData} handleFilter={handleFilter}/>}
            </div>
            <div></div>
        </>
    )
}

export default CarList;