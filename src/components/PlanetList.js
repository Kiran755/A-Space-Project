import React from 'react';
import { Link } from "react-router-dom";
import "./PlanetList.css";
import Data from './PlanetData';
import { motion } from "framer-motion";
const List = (props) => {
    return (
        <motion.div className='ListItem'>
            <Link to={`/planets/${props.id}`}>
                <div className='imageHolder'>
                    <motion.img src={process.env.PUBLIC_URL + props.image}
                        initial={{ x: 0, y: 0 }}
                        animate={{ y: 10 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                    >

                    </motion.img>
                </div>
            </Link>
            <div>
                <h4 style={{ color: "aqua" }}>{props.title}</h4>
            </div>
        </motion.div>
    );
}
const PlanetList = () => {
    return (
        <div className='ListOfPlanets'>

            {Data.map((planet) => {
                return <List key={planet.id} id={planet.id} image={planet.image} title={planet.PlanetName} />
            })}
        </div>
    )
}

export default PlanetList