import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./CoachForm.css"; // Import custom CSS for styling

function CoachForm() {
    const [formData, setFormData] = useState({
        name: "",
        about: "",
        speciality: "",
        coachType: "",
        certificates: "",
        planPrices: {
            plan1: "",
            plan2: "",
            plan3: "",
            plan4: "",
        },
        profilePhoto: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith("plan")) {
            setFormData({
                ...formData,
                planPrices: { ...formData.planPrices, [name]: value },
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, profilePhoto: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // Add your form submission logic here
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
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                {/* About Yourself */}
                <Form.Group className="mb-3" controlId="formAbout">
                    <Form.Label>About Yourself</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Tell us about yourself"
                        name="about"
                        value={formData.about}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                {/* Speciality */}
                <Form.Group className="mb-3" controlId="formSpeciality">
                    <Form.Label>Your Speciality</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your speciality"
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
                    <Form.Label>Your Certificates</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your certificates"
                        name="certificates"
                        value={formData.certificates}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                {/* Plan Prices */}
                <Form.Group className="mb-3" controlId="formPlanPrices">
                    <Form.Label>Plan Prices</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Plan 1 Price"
                        name="plan1"
                        value={formData.planPrices.plan1}
                        onChange={handleChange}
                        required
                    />
                    <Form.Control
                        type="number"
                        placeholder="Plan 2 Price"
                        name="plan2"
                        value={formData.planPrices.plan2}
                        onChange={handleChange}
                        required
                        className="mt-2"
                    />
                    <Form.Control
                        type="number"
                        placeholder="Plan 3 Price"
                        name="plan3"
                        value={formData.planPrices.plan3}
                        onChange={handleChange}
                        required
                        className="mt-2"
                    />
                    <Form.Control
                        type="number"
                        placeholder="Plan 4 Price"
                        name="plan4"
                        value={formData.planPrices.plan4}
                        onChange={handleChange}
                        required
                        className="mt-2"
                    />
                </Form.Group>

                {/* Profile Photo */}
                <Form.Group className="mb-3" controlId="formProfilePhoto">
                    <Form.Label>Profile Photo</Form.Label>
                    <Form.Control
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                    />
                </Form.Group>

                {/* Submit Button */}
                <Button variant="dark" type="submit" className="w-100">
                    Register as Coach
                </Button>
            </Form>
        </Container>
    );
}

export default CoachForm;