import React from 'react'
import mars from "./assets/mars.svg";
import "./PlanetComponent.css";
import { motion } from "framer-motion";
const Mars = () => {
    return (
        <>
            <motion.img src={mars} className="planetSource" alt="mars.svg"
                initial={{ x: '10vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, type: "spring", stiffness: 120 }}
            ></motion.img>
        </>
    )
}

export default Mars