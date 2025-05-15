import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CoachForm.css";

function CoachForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        about: "",
        speciality: "",
        coachType: "",
        certificates: "",
        planPrices: {
            monthly: "",
            quarterly: "",
            halfYearly: "",
            yearly: "",
        },
        profilePhoto: null,
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (["monthly", "quarterly", "halfYearly", "yearly"].includes(name)) {
            setFormData(prev => ({
                ...prev,
                planPrices: { ...prev.planPrices, [name]: value },
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, profilePhoto: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("name", formData.name);
        data.append("password", formData.password);
        data.append("aboutMe", formData.about);
        data.append("type", formData.coachType);
        data.append("speciality", JSON.stringify(formData.speciality.split(",")));
        data.append("certifications", JSON.stringify(formData.certificates.split(",")));
        data.append("packages", JSON.stringify(formData.planPrices));
        data.append("profilePhoto", formData.profilePhoto);

        try {
            const res = await axios.post(
                "http://localhost:5000/api/trainer/signup",
                data,
                { headers: { "Content-Type": "multipart/form-data" } }
            );
            console.log("Signup successful:", res.data);

            // Optionally store token or user info in localStorage
            localStorage.setItem("trainerToken", res.data.token);
            localStorage.setItem("trainerName", res.data.name);

            // Navigate to coach profile page
            navigate("/coach-profile");
        } catch (err) {
            console.error("Signup failed:", err.response?.data || err.message);
        }
    };

    return (
        <Container className="coach-form-container">
            <h2 className="text-center mb-4">Coach Registration</h2>
            <Form onSubmit={handleSubmit}>

                {/* Name */}
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                {/* About */}
                <Form.Group className="mb-3" controlId="formAbout">
                    <Form.Label>About Yourself</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="about"
                        value={formData.about}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                {/* Speciality */}
                <Form.Group className="mb-3" controlId="formSpeciality">
                    <Form.Label>Your Speciality (comma separated)</Form.Label>
                    <Form.Control
                        type="text"
                        name="speciality"
                        value={formData.speciality}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                {/* Coach Type */}
                <Form.Group className="mb-3" controlId="formCoachType">
                    <Form.Label>Coach Type</Form.Label>
                    <Form.Select
                        name="coachType"
                        value={formData.coachType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Coach Type</option>
                        <option value="strength-training">Strength Training</option>
                        <option value="injury-rehab">Injury Rehab</option>
                    </Form.Select>
                </Form.Group>

                {/* Certificates */}
                <Form.Group className="mb-3" controlId="formCertificates">
                    <Form.Label>Certificates (comma separated)</Form.Label>
                    <Form.Control
                        type="text"
                        name="certificates"
                        value={formData.certificates}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                {/* Plan Prices */}
                <Form.Group className="mb-3">
                    <Form.Label>Plan Prices</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Monthly"
                        name="monthly"
                        value={formData.planPrices.monthly}
                        onChange={handleChange}
                        required
                    />
                    <Form.Control
                        type="number"
                        placeholder="Quarterly"
                        name="quarterly"
                        value={formData.planPrices.quarterly}
                        onChange={handleChange}
                        required
                        className="mt-2"
                    />
                    <Form.Control
                        type="number"
                        placeholder="Half-Yearly"
                        name="halfYearly"
                        value={formData.planPrices.halfYearly}
                        onChange={handleChange}
                        required
                        className="mt-2"
                    />
                    <Form.Control
                        type="number"
                        placeholder="Yearly"
                        name="yearly"
                        value={formData.planPrices.yearly}
                        onChange={handleChange}
                        required
                        className="mt-2"
                    />
                </Form.Group>

                {/* Profile Photo */}
                <Form.Group className="mb-3">
                    <Form.Label>Profile Photo</Form.Label>
                    <Form.Control
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                    />
                </Form.Group>

                <Button variant="dark" type="submit" className="w-100">
                    Register as Coach
                </Button>
            </Form>
        </Container>
    );
}

export default CoachForm;
