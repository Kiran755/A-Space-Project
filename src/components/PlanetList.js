import React from 'react';
import { Link } from "react-router-dom";
import "./PlanetList.css";
import Data from './PlanetData';
const List = (props) => {
    return (
        <div className='ListItem'>
            <div className='imageHolder'>
                <img src={process.env.PUBLIC_URL + props.image}>

                </img>
            </div>
            <div>
                <h4>{props.title}</h4>
            </div>
        </div>
    );
}
const PlanetList = () => {
    return (
        <div className='ListOfPlanets'>

            {Data.map((planet) => {
                return <List key={planet.id} image={planet.image} title={planet.PlanetName} />
            })}
        </div>
    )
}

export default PlanetList