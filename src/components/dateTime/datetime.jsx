import  React, { useState , useEffect } from 'react'
import "./datetime.css"

export const DateTime = (props) => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        props.parentCallbackDateTime(date.getHours());
        return function cleanup() { 
            clearInterval(timer)
        }    
    });

    return(
        <div className='time'>
            <h2>{date.toLocaleTimeString()}</h2>
        </div>
    )
}

export default DateTime