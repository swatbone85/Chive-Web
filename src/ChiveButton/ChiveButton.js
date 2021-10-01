import React from 'react'
import './ChiveButton.css'

const ChiveButton = (props) => {
    return (
        <button onClick={props.onClick}>{props.title}</button>
    )
}

export default ChiveButton