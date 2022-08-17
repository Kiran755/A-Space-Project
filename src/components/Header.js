import React, { useState } from 'react'
import { Navbar, NavbarToggler, Collapse, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
const Header = () => {
    const [open, setOpen] = useState("false");
    const ToggleMenu = () => {
        setOpen(!open);
    }
    return (
        <>
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
        </>
    )
}

export default Header;