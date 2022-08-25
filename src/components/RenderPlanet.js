import React from 'react'
import "./RenderPlanet.css";
import Data from "./PlanetData";
import earth from "./assets/earth.svg";
const RenderPlanet = () => {
    return (
        <div className="PlanetContainer">
            <div className="PlanetSVG">
                <img src={earth}></img>
            </div>
            <div className="PlanetData">
                <h1>{Data[0].PlanetName}</h1>

            </div>
        </div>
    )
}

export default RenderPlanet