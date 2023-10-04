import React, { useState, useEffect } from 'react';
import "./CustomerDetails.css";
import {ApiReview} from "../../api/ApiReview";
import ReviewItem from './Review';
//TODO: restaurants list, delete review, edit customer data, delete customer, add design
const CustomerDetails = () => {
    const [areCommentsVisible, setAreCommentsVisible] = useState(false);
    const [reviews, setReviews] = useState([]);
    const token = localStorage.getItem("ACCESS_TOKEN")
    const jwt = JSON.parse(token)

    //TODO: method on click
    const fetchReviews = () => {
        ApiReview.getReviewsByUserId(jwt.id)
            .then(data => {
                setReviews(data);
            })
            .catch(error => {
                console.error("Error fetching reviews:", error);
            });
    };

    const toggleCommentsVisibility = () => {
        if (!areCommentsVisible) {
            fetchReviews();
        }
        setAreCommentsVisible(!areCommentsVisible);
    };

    return (
        <div id="profile">
            <div id="details">
                <h1 id="details-header">Profile</h1>
                <div id="details-text">Customer: {jwt.name}</div>
                <div id="details-text">email: {jwt.email}</div>
            </div>
            <div id="comments">
                <button id="show-comments-button" onClick={toggleCommentsVisibility}>
                    {areCommentsVisible ? "Hide comments" : "Show comments"}
                </button>
                {areCommentsVisible && (
                    <div id="reviews-list">
                        {reviews.map((review, index) => (
                            <ReviewItem key={index} review={review} />
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}

export default CustomerDetails;
