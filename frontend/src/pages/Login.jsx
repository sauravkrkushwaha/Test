import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./Login.css"; // Import custom CSS for styling

function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data Submitted:", formData);
        // Add your login submission logic here
    };

    return (
        <div className="login-container">
            <h2 className="text-center mb-4">Login</h2>
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
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default Login;