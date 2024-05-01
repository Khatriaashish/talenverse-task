import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import "../../public/index.css"
import logo from "../../public/logo.png"


const Homeheading = ({theme="light"}) => {
    return (<>
        <Navbar
            expand="lg"
            className="bg-body-tertiary"
            bg={theme} data-bs-theme={theme}>
                
            <Container>
                <NavLink to="/">                        
                    <img src={logo} className="d-block mx-lg-auto" alt="" loading="lazy" width={"100%"} />
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/products" className="nav-link">Our Products</NavLink>
                        <NavDropdown title="Resources" id="basic-nav-dropdown">
                            <NavLink to="" className={"nav-link"}>something</NavLink>
                            <NavLink to="" className={"nav-link"}>something</NavLink>
                        </NavDropdown>
                        <NavLink to="/contact" className="nav-link">Contact</NavLink>
                    </Nav>
                    <Nav className="float-end">
                        <NavLink to="/signup" className={"nav-link text-primary px-4"}>SignUp</NavLink>
                        <NavLink to="/login" className="btn btn-primary">Login</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <hr className="thin-horizontal-line"></hr>
    </>)
}

export default Homeheading
