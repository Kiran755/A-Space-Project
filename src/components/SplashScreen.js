import React from 'react'
import "./Splashscreen.css";
import { motion } from "framer-motion"
const SplashScreen = () => {
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
            <button className='button'>Explore</button>
        </div>

    )
}

export default SplashScreen