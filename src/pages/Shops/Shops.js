import React,{ useState}from "react";
import Counter from "../../components/counter/counter.jsx"
import DateTime from "../../components/dateTime/datetime.jsx"
import TotalCount from "../../components/totalCount/totalCount.jsx"
import shopsData from "../../data/shopsData.json"

export default function Shops() {
    const [total, setTotal] = useState(0)
    const [timeNow, setTimeNow] = useState(0)

    let handleCallbackCounter = () =>{
        setTotal((previous) => previous + 1)
    }
    let handleCallbackDateTime = (date) =>{
        setTimeNow(date)
    }

    return (
        <div>
            <TotalCount total={total}/>
            <DateTime parentCallbackDateTime={handleCallbackDateTime}/>
            {shopsData.map((shops, id) => {
                return <Counter key={id} data={shops} parentCallbackCounter = {handleCallbackCounter} timeNow={timeNow}/>
            })}
        </div>
    )
}