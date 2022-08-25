import React, { useState } from 'react'
import "./Splashscreen.css";
import { motion } from "framer-motion";
import Rocket from "./assets/rocket.svg";
import { useNavigate } from "react-router-dom";
const SplashScreen = () => {
    const navigate = useNavigate();
    const [isDone, setDone] = useState(false);
    const HandleButtonClick = () => {
        setDone(true);
        setTimeout(() => {
            navigate("/planets");
        }, 5100)
    }
    return (
        <div className='customBox'>
            {/* <h1 >Lets Explore.</h1> */}
            <motion.h1 className='customH1'
                initial={{
                    opacity: 0,
                    position: "absolute",
                    top: "40%",
                    left: "50%"
                }}
                animate={{ opacity: 1, top: "50%" }}
                transition={{ duration: 3 }}
            >
                Lets Explore.
            </motion.h1>
            <motion.button className='button' onClick={HandleButtonClick}
            >Lift Off</motion.button>
            <motion.i


                initial={{
                    opacity: 0,
                    x: "-80vh",
                    y: 0
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 7 }}
                className={isDone ? "fa-solid fa-shuttle-space rocket-after" : "fa-solid fa-shuttle-space rocket"}
            >

            </motion.i>
        </div>

    )
}

export default SplashScreen