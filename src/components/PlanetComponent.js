import { React, useState } from 'react'
import "./PlanetComponent.css";
import Sun from "./assets/Sun.svg";
import Mercury from './Mercury';
import Earth from './Earth';
import Header from "./Header";
import Mars from './Mars';
import Venus from './Venus';

const PlanetComponent = () => {
    const [planetNo, setPlanetNo] = useState(1);


    const Increment = () => {
        if (planetNo < 4)
            setPlanetNo(planetNo + 1);
    }
    const Decrement = () => {
        if (planetNo > 1)
            setPlanetNo(planetNo - 1);
    }
    const HandlePlanet = () => {
        switch (planetNo) {
            case 1:
                return (
                    <Mercury className="planetSource" />
                )
            case 2:
                return <Venus className="planetSource" />
            case 3:
                return <Earth className="planetSource" />
            case 4:
                return <Mars className="planetSource" />
            default:
                return <Earth className="planetSource" />
        }
    }
    const HandleName = () => {
        switch (planetNo) {
            case 1:
                return "Mercury";
            case 2:
                return "Venus";
            case 3:
                return "Earth";
            case 4:
                return "Mars";
        }
    }
    return (
        <>
            <Header />
            <div className='PlanetHolder'>
                <div className='planet'>
                    <i className="fa-solid fa-angles-left planetHandlerIcons" onClick={Increment}></i>
                    {HandlePlanet()}
                    <i className="fa-solid fa-angles-right planetHandlerIcons" onClick={Decrement}></i>
                    <h3 style={{ color: "#01fff0" }}>{HandleName()}</h3>
                </div>
                <div className='Sun'>
                    <img src={Sun} className="SunSource" alt="sun.svg"></img>
                </div>
            </div>
        </>
    )
}

export default PlanetComponent