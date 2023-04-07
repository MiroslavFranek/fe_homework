import React, { useState, useEffect} from "react";
import "./Dashboard.css"
import Graph from "../../components/graph/graph.jsx"
import Slider from "../../components/slider/slider.jsx"
import graphsData from "../../data/graphsData.json"

export default function Dashboard() {
    const [years, setYears] = useState({value:5})
    let handleCallbackSlider = (value) => {
        setYears(value.value)
    }
    return (
        <>
            {graphsData.map((graphs, id) => {
                return <Graph key={id} data={graphs} numOfYears={years}/>
            })}
            <Slider parentCallbackSlider={handleCallbackSlider} />
        </>
    )
}