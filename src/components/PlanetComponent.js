import React from 'react'
import earth from "./assets/earth.svg";
import "./PlanetComponent.css";
import Sun from "./assets/Sun.svg";
import mercury from "./assets/mercury.svg"

const PlanetComponent = () => {
    return (
        <div className='PlanetHolder'>
            <div className='planet'>
                <img src={mercury} className="planetSource" alt="earth.svg"></img>
                <h4>Earth</h4>
            </div>
            <div className='Sun'>
                <img src={Sun} className="SunSource" alt="sun.svg"></img>
            </div>
        </div>
    )
}

export default PlanetComponent