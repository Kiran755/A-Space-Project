import React, { useState } from 'react'
import { Navbar, NavbarToggler, Collapse, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import "./Header.css";
import { motion, AnimatePresence } from "framer-motion";
const Header = () => {
    const [open, setOpen] = useState(false);
    const [hide, setHide] = useState(false);
    const ToggleMenu = () => {
        setOpen(!open);
    }
    const Togglenavbar = () => {
        setHide(!hide);
        console.log(hide);
    }
    return (
        <>
            <AnimatePresence>
                {!hide ?
                    (
                        <motion.div className="HeaderNav"
                            initial={{ y: "-10vh", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "-10vh", opacity: 0 }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
                        >
                            <Navbar color="dark" dark expand="md">
                                <div className='container'>
                                    <div className='row'>
                                        <NavbarBrand className="mr-auto">
                                            <img src='Asteroid.png' alt="asteroid" height="60"
                                                width="60"></img>
                                        </NavbarBrand>
                                        <NavbarToggler onClick={ToggleMenu} />
                                        <Collapse isOpen={open} navbar>
                                            <Nav navbar>
                                                <NavItem>
                                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink className="nav-link" to="/home">Home</NavLink>

                                                </NavItem>
                                                <NavItem>
                                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                                </NavItem>
                                                <NavItem>

                                                    <NavLink className="nav-link" to="/home">Home</NavLink>

                                                </NavItem>
                                                <NavItem>
                                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                                </NavItem>
                                            </Nav>
                                        </Collapse>

                                    </div>
                                </div>
                            </Navbar>

                        </motion.div>
                    ) : (null)}
            </AnimatePresence>


            <div className='closeNav'>
                <button onClick={Togglenavbar} className="ToggleButtonNavbar">
                    {!hide ? (<motion.div>
                        <i className="fa-solid fa-angles-up AngleUp"></i>
                    </motion.div>) : (<motion.div>
                        <i className="fa-solid fa-angles-down AngleDown"></i>
                    </motion.div>)}



                </button>
            </div>
        </>
    )
}

export default Header;