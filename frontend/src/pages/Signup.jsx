import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Signup.css"; // Import custom CSS for styling

function Signup() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // Add your form submission logic here
    };

    return (
        <div className="signup-container">
            <h2 className="text-center mb-4">Signup</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Enter your phone number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="dark" type="submit" className="w-100">
                    Signup
                </Button>
            </Form>

            <div className="text-center mt-3">
                <Button
                    variant="link"
                    onClick={() => navigate("/login")} // Corrected route path
                    className="toggle-button"
                >
                    Already have an account? Login
                </Button>
            </div>
        </div>
    );
}

export default Signup;