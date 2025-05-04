import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './Header.css'; // Import custom CSS for styling

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            
                <Navbar.Brand as={Link} to="/">
                    FITHUB
                    {/* Uncomment the logo if needed */}
                    {/* <img src={logo} alt="Fithub Logo" className="navbar-logo" /> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* Empty space for future navigation */}
                    </Nav>
                    <Nav className="d-flex align-items-center"> {/* Added alignment classes */}
                        <Nav.Link as={Link} to="/coach-category">Get a coach</Nav.Link>
                        <Nav.Link as={Link} to="/coach-profile">My Profile</Nav.Link>
                        <Nav.Link as={Link} to="/login">
                            <Button variant="dark">Login</Button>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/signup">
                            <Button variant="outline-dark">Signup</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
           
        </Navbar>
    );
}

export default Header;