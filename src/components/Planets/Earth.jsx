import React from 'react'
import earth from "../assets/earth.svg";
import "../PlanetComponent/PlanetComponent.css";
import { motion } from "framer-motion";
const Earth = () => {
    return (
        <>
            <motion.img src={earth} className="planetSource" alt="earth.svg"
                initial={{ x: '10vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, type: "spring", stiffness: 120 }}
            ></motion.img>
        </>
    )
}

export default Earth