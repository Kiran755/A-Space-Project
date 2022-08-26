import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { Navbar, NavbarToggler, Collapse, NavbarBrand, Nav, NavItem } from 'reactstrap'
import "./Header.css";
import { motion, AnimatePresence } from "framer-motion";
import BottomNavbar from './BottomNavbar';
const Header = () => {
    const [open, setOpen] = useState(false);
    const [hide, setHide] = useState(false);
    const [showBtnNav, setBtnNav] = useState(false);
    const [Width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleWindowResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);
    const ToggleMenu = () => {
        setOpen(!open);
    }
    const Togglenavbar = () => {
        setHide(!hide);
        console.log(hide);
    }
    const ToggleBtnNav = () => {
        setBtnNav(!showBtnNav);
    }
    return (
        <>
            <AnimatePresence>
                {(Width > 1200 && !hide) ?
                    (
                        <motion.div className="HeaderNav"
                            initial={{ y: "-10vh", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "-10vh", opacity: 0 }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
                        >
                            <Navbar dark expand="md">
                                <div className='container'>
                                    <div className='row'>
                                        <NavbarBrand className="mr-auto">
                                            <img src='Asteroid.png' alt="asteroid" height="50"
                                                width="50"></img>
                                        </NavbarBrand>
                                        <NavbarToggler onClick={ToggleMenu} />
                                        <Collapse isOpen={open} navbar>
                                            <Nav navbar className='SpreadNav'>
                                                <NavItem>
                                                    <NavLink className="nav-link custom-nav-item" to="/A-Space-Project"><i className="fa-solid fa-house"></i>Home</NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink className="nav-link custom-nav-item" to="/planets/1"><i className="fa-solid fa-earth-oceania"></i>Planets</NavLink>

                                                </NavItem>
                                                <NavItem>
                                                    <NavLink className="nav-link custom-nav-item" to="/A-Space-Project"><i className="fa-solid fa-binoculars"></i>View</NavLink>
                                                </NavItem>
                                                <NavItem>

                                                    <NavLink className="nav-link custom-nav-item" to="/A-Space-Project"><i className="fa-solid fa-user"></i>About me</NavLink>

                                                </NavItem>
                                                <NavItem>
                                                    <NavLink className="nav-link custom-nav-item" to="/A-Space-Project"><i className="fa-solid fa-paper-plane"></i>Contact</NavLink>
                                                </NavItem>
                                            </Nav>
                                        </Collapse>

                                    </div>
                                </div>
                            </Navbar>

                        </motion.div>
                    ) :
                    (Width < 1200 && showBtnNav) ? (<BottomNavbar />) : (null)
                }
            </AnimatePresence>


            <div className='closeNav'>
                <button onClick={(Width < 1200) ? (ToggleBtnNav) : (Togglenavbar)} className="ToggleButtonNavbar">
                    {(Width > 1200) ? ((!hide) ? (<motion.div>
                        <i className="fa-solid fa-angles-up AngleUp"></i>
                    </motion.div>) : (<motion.div>
                        <i className="fa-solid fa-angles-down AngleDown"></i>
                    </motion.div>)) : ((!showBtnNav) ? (<motion.div>
                        <i className="fa-solid fa-angles-up AngleUp"></i>
                    </motion.div>) : (<motion.div>
                        <i className="fa-solid fa-angles-down AngleDown"></i>
                    </motion.div>))}
                </button>
            </div>
        </>
    )
}

export default Header;