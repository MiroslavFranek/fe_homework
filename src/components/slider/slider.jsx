import { useState, useEffect } from 'react'
import "./slider.css"

export const Slider = (props) => {

    const [value, setValue] = useState(5);
    const MAX = 5;
    const getBackgroundSize = () => {
        return { backgroundSize: `${(value * 100) / MAX}% 100%`, }
    }

    useEffect(() => {
        props.parentCallbackSlider({ value });
    }, [value]);

    const valueChange = (event) => {
        setValue(event.target.value)
    }

    const yearifier = () => {
        if (value == 1) {
            return "rok"
        }
        else if (value < 5) {
            return "roky"
        }
        else {
            return "let"
        }


    }
    return (
        <div className='sliderTile'>
            <h2 className='sliderText'>Zobrazit Data za <span style={{ color: "mediumorchid" }}>{value}</span> {yearifier()}</h2>
            <input className='slider'
                type="range"
                min="1"
                max={MAX}
                onChange={valueChange}
                style={getBackgroundSize()}
                value={value} />
        </div>
    )
}

export default Slider