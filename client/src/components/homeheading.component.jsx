import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import "../../public/index.css"
import logo from "../../public/logo.png"
import { toast } from "react-toastify";
import apiCall from "../repository/api-call"


const Homeheading = ({theme="light"}) => {
    const [user, setUser] = useState({});

    const getLoggedInUser = async()=>{
        try {
            const response = await apiCall.getLoggedInUser();
            setUser(response.result);
        } catch (error) {
            toast.error(error.message);
            localStorage.removeItem("_au");
        }
    }

    useEffect(()=>{
        const user = localStorage.getItem("_user");
        const token = localStorage.getItem("_au");
        if(user&&token){
            getLoggedInUser();
        }
    }, [])
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
                        <NavLink to="/products" className="nav-link disabled">Our Products</NavLink>
                        <NavDropdown title="Resources" id="basic-nav-dropdown">
                            <NavLink to="/something" className={"nav-link disabled"}>something</NavLink>
                            <NavLink to="/something" className={"nav-link disabled"}>something</NavLink>
                        </NavDropdown>
                        <NavLink to="/contact" className="nav-link">Contact</NavLink>
                    </Nav>
                    <Nav className="float-end">
                        {
                            user&&user.role?<>
                                    {
                                        user.role==='admin'?<>
                                            <NavLink to="/admin" className={"nav-link"}>Manage</NavLink>
                                        </>:<></>
                                    }
                                <NavDropdown title={user.name} id="basic-nav-dropdown">
                                    <NavLink to="/logout" className={"nav-link"}>Logout</NavLink>
                                </NavDropdown>
                            </>:<>
                                <NavLink to="/signup" className={"nav-link text-primary px-4"}>SignUp</NavLink>
                                <NavLink to="/login" className="btn btn-primary">Login</NavLink>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <hr className="thin-horizontal-line"></hr>
    </>)
}

export default Homeheading
