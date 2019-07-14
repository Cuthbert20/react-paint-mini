import React from 'react'

function ColorPicker(props) {
    return(
        <div>
            Ryker's Color Picker  
            <button onClick={() => props.handleColorClick("blue")} >Blue</button>
            <button onClick={() => props.handleColorClick("yellow")} >Yellow</button>
            <button onClick={() => props.handleColorClick("green")} >Green</button>
            <button onClick={() => props.handleColorClick("purple")} >Purple</button>
            <button onClick={() => props.handleColorClick("pink")} >Pink</button>
            <button onClick={() => props.handleColorClick("red")} >Red</button>
            <button onClick={() => props.handleColorClick("turquoise")} >Turquoise</button>
            <button onClick={() => props.handleColorClick("gold")} >Gold</button>
            <button onClick={() => props.handleColorClick("hotpink")} >HOT PINK!</button>
            <button onClick={() => props.handleColorClick("white")}>White</button>

        </div>
    )
}

export default ColorPicker