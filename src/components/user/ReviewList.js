import React from 'react';

const ReviewItem = ({handleDeleteReview, isReviewOpen, reviews}) => {
    return (
        <div id="comments">
            {isReviewOpen && (
                <div id="reviews-list">
                    {reviews.map((review, _) => (
                        <div key={review.id} className="review-item">
                            <button data-id={review.id} className="delete-button" onClick={handleDeleteReview}>Delete
                                review
                            </button>
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
