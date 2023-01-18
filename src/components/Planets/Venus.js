import React from 'react';
import venus from "../assets/venus.svg";
import "../PlanetComponent/PlanetComponent.css";
import { motion } from "framer-motion";
const Venus = () => {
    return (
        <>
            <motion.img src={venus} className="planetSource" alt="venus.svg"
                initial={{ x: '10vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, type: "spring", stiffness: 120 }}
            ></motion.img>
        </>
    )
}

export default Venus