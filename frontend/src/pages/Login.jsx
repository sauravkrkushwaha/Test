import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loginType, setLoginType] = useState("client"); // "client" or "coach"
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload =
      loginType === "coach"
        ? { name: formData.username, password: formData.password }
        : { username: formData.username, password: formData.password };

    const endpoint =
      loginType === "coach"
        ? "http://localhost:5000/api/trainer/login"
        : "http://localhost:5000/api/user/login";

    try {
      const res = await axios.post(endpoint, payload);

      // Log token to console
      console.log("Token received:", res.data.token);

      if (loginType === "coach") {
        localStorage.setItem("trainerToken", res.data.token);
        localStorage.removeItem("token");
        navigate("/coach-profile");
      } else {
        localStorage.setItem("token", res.data.token);
        localStorage.removeItem("trainerToken");
        navigate("/user-profile");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <h2 className="text-center mb-4">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formLoginType">
          <Form.Label>Login As</Form.Label>
          <Form.Select
            value={loginType}
            onChange={(e) => setLoginType(e.target.value)}
            required
          >
            <option value="client">Client</option>
            <option value="coach">Coach</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>{loginType === "coach" ? "Name" : "Username"}</Form.Label>
          <Form.Control
            type="text"
            placeholder={loginType === "coach" ? "Enter name" : "Enter username"}
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
            placeholder="Enter password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {error && <div className="text-danger text-center mb-3">{error}</div>}

        <Button variant="dark" type="submit" className="w-100">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
