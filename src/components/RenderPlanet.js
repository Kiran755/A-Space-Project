import React from 'react'
import "./RenderPlanet.css";
import Data from "./PlanetData";
import earth from "./assets/earth.svg";
import { useParams, useNavigate } from 'react-router-dom';
const RenderPlanet = () => {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    console.log(id);
    const planetDetail = Data.filter((planet) => {
        return planet.id === id;
    })
    console.log(planetDetail);
    const HandleBack = () => {
        navigate("/planets");
    }
    return (
        <div className="PlanetContainer">
            <div className='backArrow' onClick={HandleBack}>
                <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div className="PlanetSVG">
                <img src={planetDetail[0].image}></img>
            </div>
            <div className="PlanetData">
                <div className='ShortDetails'>
                    <h1>Planet Name : <span>{planetDetail[0].PlanetName}</span></h1>
                    <h4>Mass: <span>{planetDetail[0].Mass}</span></h4>
                    <h4>Radius: <span>{planetDetail[0].Radius}</span></h4>
                    <h4>Position from Sun: <span>{planetDetail[0].Position}</span></h4>
                    <h4>No. of natural Satellites: <span>{planetDetail[0].NaturalSatellite}</span></h4>
                    <h4>Name of natural Satellites: <span>{planetDetail[0].NaturalSatelliteName}</span></h4>
                    <h4>Atmosphere: <span>{planetDetail[0].Atmosphere}</span></h4>
                    <h4>Habitable: <span>{planetDetail[0].Habitable}</span></h4>
                    <h4>Gravity: <span>{planetDetail[0].Gravity}</span></h4>
                </div>
                <div className='LongDescription'>
                    <h5>Description:</h5>
                    <p>{planetDetail[0].PlanetDesc}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RenderPlanet