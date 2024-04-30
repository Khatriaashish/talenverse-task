import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Homeheading = () => {
    return (<>
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Resources" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Resource 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Resource 2
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Other resources
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#features">Our Products</Nav.Link>
                    <Nav.Link href="#pricing">Contacts</Nav.Link>
                </Nav>
                <Nav className="float-end">
                    <NavLink to="/signup" className="btn btn-sm btn-outline-primary me-2">Sign Up</NavLink>
                    <NavLink to="/login" className={"btn btn-primary btn-sm"}>Login</NavLink>
                </Nav>
            </Container>
        </Navbar>
    </>)
}

export default Homeheading
