import React from 'react'
import "./ShortInfoLayout.css"
const ShortInfoLayout = (props) => {
    const info = props.info;
    const svg = props.svg;
    const title = props.title;
    return (
        <div className='shortInfoContainer'>
            <div className='title'>{title}</div>
            <div className='svg'>{svg}</div>
            <div className='info'>{info}</div>
        </div>
    )
}

export default ShortInfoLayout