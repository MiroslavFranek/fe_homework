import { React, useState, useEffect } from 'react'
import Selector from "../selector/selector";
import "./modal.css"


const Modal = ({marketData, openModal, handleFilter}) => {
    const [brand, setBrand] = useState("")
    const [model, setModel] = useState("")
    const [fuel, setFuel] = useState("")




    return (
        <div className="modalBackground">
            <div className="modalContent">
                <p>modální okno</p>
                <Selector marketData={marketData} name={"manufacturer"} setSubject={setBrand}subject={brand}/>
                <Selector marketData={marketData} name={"model"} setSubject={setModel}subject={model} />
                <Selector marketData={marketData} name={"fuel"} setSubject={setFuel}subject={fuel} />
                <button onClick={() => {
                    openModal(false)
                    handleFilter([brand,model,fuel])
                }
                }>X</button>
            </div>
        </div>
    )
}

export default Modal;