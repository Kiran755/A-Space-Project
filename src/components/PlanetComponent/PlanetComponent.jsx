import { React, useState } from 'react'
import "./PlanetComponent.css";
import Sun from "../assets/Sun.svg";
import Mercury from '../Planets/Mercury';
import Earth from '../Planets/Earth';
import Header from "../Header/Header";
import Mars from '../Planets/Mars';
import Venus from '../Planets/Venus';
import EarthUVImage from "../assets/EarthUVImage.jpg"
import VenusUVImage from "../assets/VenusUVImage.jpg"
import MarsUVImage from "../assets/MarsUVImage.jpg"
import MercuryUVImage from '../assets/MercuryUVImage.jpg';
import { Link } from 'react-router-dom';

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
                    <Link to="/planets/1" state={{ from: MercuryUVImage }} className='LinkPlanets'><Mercury /></Link>
                )
            case 2:
                return <Link to="/planets/2" state={{ from: VenusUVImage }} className='LinkPlanets'><Venus /></Link>
            case 3:
                return <Link to="/planets/3" state={{ from: EarthUVImage }} className='LinkPlanets'><Earth /></Link>
            case 4:
                return <Link to="/planets/4" state={{ from: MarsUVImage }} className='LinkPlanets'><Mars /></Link>
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
            default:
                return "Earth";
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
                    <Link to="/planets/5" state={{ from: MarsUVImage }}><img src={Sun} className="SunSource" alt="sun.svg"></img></Link>
                </div>
            </div>
        </>
    )
}

export default PlanetComponent