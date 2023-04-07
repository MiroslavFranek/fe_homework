import React from 'react'
import "./graph.css"
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'
const DataFormater = (number) => {
    if (number > 1000000) {
        return (number / 1000000).toFixed(2).toString() + 'M';
    } else if (number > 1000) {
        return (number / 1000).toFixed(2).toString() + 'K';
    }
}
const CustomTooltip = ({ active, payload }) => {

    if (active) {
        return (
            <>
                <div style={{ backgroundColor: "rgb(10,10,10)", padding: "10px", borderRadius: "15px", border: "none" }}>{DataFormater((payload[0].value))}</div>
            </>
        )
    }
    return null;
};

export const Graph = (props) => {

    return (

        <div style={{ width: "33 vw", display: "inline-block", margin: "0px" }}>
            <div style={{ padding: "0 2%" }}>
                <h2 style={{ textAlign: "center" }}>{props.data.name}</h2>
                <div style={{ backgroundColor: "rgb(15,15,15)", borderRadius: "30px", padding: "20px" }}>
                    <BarChart width={400} height={300} data={props.data.graphData}>
                        <XAxis dataKey="name" stroke="white" type='number' padding={{ left: 50, right: 50 }} allowDataOverflow allowDecimals={false} domain={[(props.data.graphData[props.data.graphData.length - 1].name) - (props.numOfYears - 1), (props.data.graphData[props.data.graphData.length - 1].name)]} />
                        <YAxis stroke="white" domain={['auto', 'auto']} tickFormatter={DataFormater} />
                        <Bar dataKey="uv" fill="mediumorchid" barSize={30} />
                        <Tooltip content={CustomTooltip} cursor={false} />
                    </BarChart>
                </div>
            </div>
        </div>

    )
}

export default Graph