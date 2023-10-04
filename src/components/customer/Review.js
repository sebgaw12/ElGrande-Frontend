import React from 'react';
import "./Review.css"
import {ApiReview} from "../../api/ApiReview";

const ReviewItem = ({review}) => {

    //TODO: ask about delete method without id
    const handleDeleteReview = async () => {
        // ApiReview.deleteReview(review.id);
    }

    return (
        <div className="review-item">
            <button className="delete-review-button" onClick={handleDeleteReview}>Delete review</button>
            <p className="review-title">Grade: {review.grade}</p>
            <p className="review-text">Comment: {review.comment}</p>
        </div>
    );
}

export default ReviewItem;
