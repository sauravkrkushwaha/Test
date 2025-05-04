// import React from "react";
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import imageIr from '../assets/image/injury_rehab_e9a0a93435.webp';
import './CoachProfile.css'; // Import the CSS file
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Custom styled Rating component
const CustomRating = styled(Rating)({
    '& .MuiRating-icon': {
        fontSize: '5rem', // Increase the size of the stars
    },
    '& .MuiRating-iconEmpty': {
        color: '#ddd', // Optional: Change the color of empty stars
    },
});

function CoachProfile() {
    const [value, setValue] = React.useState(2);
    const [visibleReviews, setVisibleReviews] = React.useState(4); // State to track the number of visible reviews

    const reviews = [
        { id: 1, reviewer: "Alice", date: "12th Oct 2023", text: "Great coach! Highly recommend." },
        { id: 2, reviewer: "Bob", date: "15th Oct 2023", text: "Very professional and knowledgeable." },
        { id: 3, reviewer: "Charlie", date: "18th Oct 2023", text: "Helped me achieve my fitness goals!" },
        { id: 4, reviewer: "Diana", date: "20th Oct 2023", text: "Amazing experience, will book again." },
        { id: 5, reviewer: "Eve", date: "22nd Oct 2023", text: "Friendly and motivating coach." },
        { id: 6, reviewer: "Frank", date: "25th Oct 2023", text: "Very knowledgeable and helpful." },
        { id: 7, reviewer: "Grace", date: "28th Oct 2023", text: "Excellent coach, highly recommend!" },
        { id: 8, reviewer: "Hank", date: "30th Oct 2023", text: "Helped me achieve my fitness goals quickly." },
    ];

    const handleLoadMore = () => {
        setVisibleReviews((prev) => prev + 4); // Increase the number of visible reviews by 4
    };

    return (
        <div className="main-container">
            <div className="profile-header">
                <img src={imageIr} alt="profile" className="profile-image" />
                <div className="coach-info">
                    <h1 className="name">Bikas Bhujabala</h1>
                    <p className="specialty">Specialty: Strength & Conditioning</p>
                </div>
                <Button variant="outline-dark" className="message-button">
                    <FontAwesomeIcon icon={faMessage} />
                    Chat with Coach
                </Button>
            </div>
            <div className="about-me-card">
                <h3 className="about">About Me</h3>
                <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur quae doloribus recusandae mollitia repellendus molestias tempora a animi eveniet in at non modi veritatis, voluptates magni eius delectus vitae quo accusamus nesciunt? Enim soluta voluptatum totam incidunt? Ipsum quae magni laudantium natus nam quasi distinctio velit eveniet, odit temporibus!
                </p>
            </div>
            <div className="achievement">
                <div className="speciality-card">
                    <h3 className="title">Speciality</h3>
                    <div className="speciality-item">
                        <p className="speciality-text">Strength & Conditioning</p>
                        <p className="speciality-text">Yoga & Wellness</p>
                        <p className="speciality-text">Cardio & Endurance</p>
                        <p className="speciality-text">Weight Loss</p>
                        <p className="speciality-text">Rehabilitation</p>
                    </div>
                </div>
                <div className="certificates-card">
                    <h3 className="title">Certificates</h3>
                    <div className="certificate-item">
                        <p className="certificate-text">Certified Strength & Conditioning Specialist (CSCS)</p>
                        <p className="certificate-text">Certified Strength & Conditioning Specialist (CSCS)</p>
                        <p className="certificate-text">Certified Strength & Conditioning Specialist (CSCS)</p>
                        <p className="certificate-text">Certified Strength & Conditioning Specialist (CSCS)</p>
                    </div>
                </div>
            </div>
            <div className="package">
                <h3 className="title">Choose Your Package</h3>
                <div className="plan">
                    <div className="plan-option">
                        <span className="plan-name">Monthly Package</span>
                        <div className="price-container">
                            <span className="plan-price">$50</span>
                            <span className="original-price">$62.50</span>
                        </div>
                    </div>
                    <div className="plan-option">
                        <span className="plan-name">Quarterly Package</span>
                        <div className="price-container">
                            <span className="plan-price">$140</span>
                            <span className="original-price">$175.00</span>
                        </div>
                    </div>
                    <div className="plan-option">
                        <span className="plan-name">Half-Yearly Package</span>
                        <div className="price-container">
                            <span className="plan-price">$270</span>
                            <span className="original-price">$337.50</span>
                        </div>
                    </div>
                    <div className="plan-option">
                        <span className="plan-name">Yearly Package</span>
                        <div className="price-container">
                            <span className="plan-price">$500</span>
                            <span className="original-price">$625.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="reviews">
                <h3 className="title">Review</h3>
                <div className="rating-container">
                    {/* Left: Stars for giving a rating */}
                    <div className="rating-input">
                        <CustomRating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            size="large" // Optional: Keep this for consistency
                            icon={<StarIcon fontSize="inherit" />} // Custom filled star icon
                            emptyIcon={<StarBorderIcon fontSize="inherit" />} // Custom empty star icon
                        />
                    </div>

                    {/* Right: Average rating */}
                    <div className="avg-rating">
                        <p className="avgRating-text">Average Rating</p>
                        <div className="avgRating-value-container">
                            <h1 className="avgRating-value">4.5</h1>
                            <h1 className="avgRating-text">/5</h1>
                        </div>
                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.1} readOnly size="large" />
                    </div>
                </div>

                {/* Add Review Section */}
                <div className="add-review">
                    <textarea
                        className="review-textarea"
                        placeholder="Write your review here..."
                        rows="4"
                    ></textarea>
                    <Button variant="outline-dark" className="post-review-button">
                        Post
                    </Button>
                </div>

                {/* Reviews Section */}
                <div className="reviews-box">
                    <Row className="g-4">
                        {reviews.slice(0, visibleReviews).map((review) => (
                            <Col md={6} xs={12} key={review.id}>
                                <div className="review-card">
                                    <div className="review-author">
                                        <img src={imageIr} alt="profile" className="review-image" />
                                        <h4 className="reviewer-name">{review.reviewer}</h4>
                                        <p className="review-date">{review.date}</p>
                                    </div>
                                    <div className="review-content">
                                        <p className="review-text">{review.text}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    {visibleReviews < reviews.length && ( // Show the button only if there are more reviews to load
                        <div className="load-more-container">
                            <Button variant="outline-dark" onClick={handleLoadMore}>
                                Load More
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CoachProfile;