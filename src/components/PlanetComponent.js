import { React, useState } from 'react'
import "./PlanetComponent.css";
import Sun from "./assets/Sun.svg";
import Mercury from './Mercury';
import Earth from './Earth';
import Header from "./Header";
import Mars from './Mars';
import Venus from './Venus';
import { Link, NavLink } from 'react-router-dom';

const PlanetComponent = () => {
    const [planetNo, setPlanetNo] = useState(1);


    const Increment = () => {
        console.log(planetNo);
        if (planetNo < 4)
            setPlanetNo(planetNo + 1);
    }
    const Decrement = () => {
        console.log(planetNo);
        if (planetNo > 1)
            setPlanetNo(planetNo - 1);
    }
    const HandlePlanet = () => {
        switch (planetNo) {
            case 1:
                return (
                    <Link to="/planets/1" className='LinkPlanets'><Mercury /></Link>
                )
            case 2:
                return <Link to="/planets/2" className='LinkPlanets'><Venus /></Link>
            case 3:
                return <Link to="/planets/3" className='LinkPlanets'><Earth /></Link>
            case 4:
                return <Link to="/planets/4" className='LinkPlanets'><Mars /></Link>
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
                    <div className='terrestrial'>

                        {HandlePlanet()}

                    </div>
                    <div className='controlUnits'>
                        {(planetNo < 4) ? (<div onClick={Increment}><i className="fa-solid fa-angles-left planetHandlerIcons" ></i></div>) : <span></span>}
                        <h3 style={{ color: "#01fff0" }}>{HandleName()}</h3>
                        {(planetNo > 1) ? (<div onClick={Decrement}><i className="fa-solid fa-angles-right planetHandlerIcons" ></i></div>) : <span></span>}

                    </div>
                </div>

                <div className='Sun'>
                    <img src={Sun} className="SunSource" alt="sun.svg"></img>
                </div>
            </div>
        </>
    )
}

export default PlanetComponent