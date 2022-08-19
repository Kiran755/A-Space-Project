import React from 'react';
import mercury from "./assets/mercury.svg";
import "./PlanetComponent.css";
import { motion } from "framer-motion";
const Mercury = () => {
    return (
        <>
            <motion.img src={mercury} className="planetSource" alt="mercury.svg"
                initial={{ x: '10vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, type: "spring", stiffness: 120 }}
            ></motion.img>
        </>
    )
}

export default Mercury