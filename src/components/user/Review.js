import React, {useEffect, useState} from 'react';
import "./Review.css"
import {ApiReview, useApiReview} from "../../api/ApiReview";
import {useUserContext} from "../../context/UserContextProvider";
import {useToggle} from "../../hooks/useToggle";

const ReviewItem = () => {
    const {user} = useUserContext();
    const [reviews, setReviews] = useState([])
    const {isOpen, toggle} = useToggle()
    const {getReviewByUserId, deleteReviewById} = useApiReview()

    useEffect(() => {
        getReviewByUserId(user)
            .then(response => {
                setReviews(response)
            })
    }, []);

    const handleDeleteReview = (e) => {
        deleteReviewById(e.target.dataset.id);
    }

    return (
        <div id="comments">
            <div>
                <button className="show-button" onClick={toggle}>
                    {isOpen ? "Hide comments" : "Show comments"}
                </button>
            </div>
            {isOpen && (
                <div id="reviews-list">
                    {reviews.map((review, index) => (
                        <div key={review.id} className="review-item">
                            <button data-id={review.id} className="delete-button" onClick={handleDeleteReview}>Delete review</button>
                            <p className="review-title">Grade: {review.grade}</p>
                            <p className="review-text">Comment: {review.comment}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>

    );
}

export default ReviewItem;
