import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'; // Import Bootstrap Container
import imagePt from '../assets/image/personal_training_d154e7f2e9.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons'; // Import the specific icon
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import './CoachList.css'; // Import the CSS file

function CoachList() {
    const navigate = useNavigate(); // Initialize useNavigate

    // Sample data for coaches
    const coaches = [
        { id: 1, name: "Bikas Bhujabala", rating: 5, specialty: "Strength & Conditioning" },
        { id: 2, name: "John Doe", rating: 4.8, specialty: "Yoga & Wellness" },
        { id: 3, name: "Jane Smith", rating: 4.9, specialty: "Cardio & Endurance" },
        { id: 4, name: "Emily Davis", rating: 5, specialty: "Weight Loss" },
        { id: 5, name: "Michael Brown", rating: 4.7, specialty: "Rehabilitation" },
    ];

    return (
        <div className="coach-list-container p-4 my-4"> {/* Added container with padding and margin */}
            <Row className="g-4 justify-content-center"> {/* Centered cards with equal spacing */}
                {coaches.map((coach) => (
                    <Col md={4} sm={6} xs={12} key={coach.id}> {/* Responsive columns */}
                        <Card className="custom-card">
                            <Card.Img
                                variant="top"
                                src={imagePt}
                                className="custom-card-img"
                            />
                            <Card.Body>
                                <Card.Title className="custom-card-title">{coach.name}</Card.Title>
                                <Card.Text className="custom-card-text">
                                    {coach.rating} &#11088; | {coach.specialty}
                                </Card.Text>
                                <div className="button-container">
                                    {/* Message Button */}
                                    <Button
                                        variant="outline-dark"
                                        className="message-button"
                                        onClick={() => navigate(`/chat/${coach.id}`)} // Navigate to chat inbox
                                    >
                                        <FontAwesomeIcon icon={faMessage} size="4x"/>
                                    </Button>
                                    {/* View Profile Button */}
                                    <Button variant="outline-dark" className="view-profile-button w-100">
                                        View Profile
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default CoachList;