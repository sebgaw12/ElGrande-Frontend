import React from 'react';
import "./Review.css"

const ReviewItem = ({ review }) => {
    return (
        <div className="review-item">
            <p className="review-title">Grade: {review.grade}</p>
            <p className="review-text">Comment: {review.comment}</p>
        </div>
    );
}

export default ReviewItem;
