import React, {useState} from 'react';
import "./Review.css"
import {useUserContext} from "../../context/UserContextProvider";
import {useToggle} from "../../hooks/useToggle";
import {useApi} from "../../hooks/useApi";

const ReviewItem = () => {
    const {user} = useUserContext();
    const [reviews, setReviews] = useState([])
    const {isOpen, toggle} = useToggle()
    const {get, remove} = useApi()

    const handleShowReview = () => {
        get("api/v1/reviews", {customerId: user})
            .then(response => setReviews(response))
        toggle()
    }

    const handleDeleteReview = (e) => {
        setReviews(reviews.filter(review => review.id !== e.target.dataset.id))
        remove("api/v1/reviews/" + e.target.dataset.id)
    }

    return (
        <div id="comments">
            <div>
                <button className="show-button" onClick={handleShowReview}>
                    {isOpen ? "Hide comments" : "Show comments"}
                </button>
            </div>
            {isOpen && (
                <div id="reviews-list">
                    {reviews.map((review, index) => (
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
