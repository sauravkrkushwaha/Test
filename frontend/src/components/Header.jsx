import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import './Header.css';

function Header() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const trainerToken = localStorage.getItem("trainerToken");

    const isUserLoggedIn = Boolean(token);
    const isCoachLoggedIn = Boolean(trainerToken);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("trainerToken");
        navigate("/login");
    };

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary px-3">
            <Navbar.Brand as={Link} to="/" className="fw-bold">
                FITHUB
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto" />

                <Nav className="d-flex align-items-center gap-2">
                    {isUserLoggedIn && (
                        <Nav.Link as={Link} to="/coach-category">
                            Get a coach
                        </Nav.Link>
                    )}

                    {(isUserLoggedIn || isCoachLoggedIn) && (
                        <Nav.Link as={Link} to={isCoachLoggedIn ? "/coach-profile" : "/user-profile"}>
                            My Profile
                        </Nav.Link>
                    )}

                    {!isUserLoggedIn && !isCoachLoggedIn ? (
                        <>
                            <Nav.Link as={Link} to="/login">
                                <Button variant="dark">Login</Button>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/signup-choice">
                                <Button variant="outline-dark">Signup</Button>
                            </Nav.Link>
                        </>
                    ) : (
                        <Nav.Link as="span">
                            <Button variant="outline-danger" onClick={handleLogout}>
                                Logout
                            </Button>
                        </Nav.Link>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
