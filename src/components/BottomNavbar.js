import React from 'react'
import "./BottomNavbar.css";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
const BottomNavbar = () => {
    return (
        <>
            <motion.div className='bottom-Navbar'
                initial={{ y: "5vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "5vh", opacity: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            >
                <NavLink to="/" className="navlinks"><i className="fa-solid fa-house"></i><span className="navText">Home</span></NavLink>
                <NavLink to="/" className="navlinks"><i className="fa-solid fa-earth-oceania"></i><span className="navText">Planets</span></NavLink>
                <NavLink to="/" className="navlinks"><i className="fa-solid fa-binoculars"></i><span className="navText">View</span></NavLink>
                <NavLink to="/" className="navlinks"><i className="fa-solid fa-user"></i><span className="navText">About me</span></NavLink>
                <NavLink to="/" className="navlinks"><i className="fa-solid fa-paper-plane"></i><span className="navText">Contact</span></NavLink>
            </motion.div>
        </>
    )
}

export default BottomNavbar;