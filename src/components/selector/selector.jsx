import { React, useState, useEffect } from 'react'
import "./selector.css"

const Selector = ({ setSubject,subject, name, marketData }) => {
    const [brandSet, setBrandSet] = useState(new Set())

    useEffect(() => {
        const set = new Set(brandSet)
        marketData.forEach((value) => { set.add(value[name]) })
        setBrandSet(set)
    }, []);
    
    return (<>
        <select value={subject} onChange={({ target }) => setSubject(target.value)}>
            <option disabled hidden></option>
            {Array.from(brandSet).map((carbrands, id) => {
                return <option key={id} value={carbrands}>{carbrands}</option>
            })}
        </select>

    </>
    )
}

export default Selector;
