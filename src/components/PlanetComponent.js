import { React, useEffect, useState } from 'react'
import earth from "./assets/earth.svg";
import "./PlanetComponent.css";
import Sun from "./assets/Sun.svg";
import Mercury from './Mercury';
import Earth from './Earth';
import { motion } from "framer-motion";

const PlanetComponent = () => {
    const [planetNo, setPlanetNo] = useState(0);
    const Increment = () => {
        setPlanetNo(planetNo + 1);
    }
    const Decrement = () => {
        setPlanetNo(planetNo - 1);
    }
    const HandlePlanet = () => {
        switch (planetNo) {
            case 1:
                return (
                    <Mercury />
                )

            case 2:
                return <Earth />
            default:
                return <Earth />
        }
    }
    return (
        <div className='PlanetHolder'>
            <div className='planet'>
                <i className="fa-solid fa-angles-left" onClick={Increment}></i>
                {HandlePlanet()}
                <i className="fa-solid fa-angles-right" onClick={Decrement}></i>
                <h4>Earth</h4>
            </div>
            <div className='Sun'>
                <img src={Sun} className="SunSource" alt="sun.svg"></img>
            </div>
        </div>
    )
}

export default PlanetComponent