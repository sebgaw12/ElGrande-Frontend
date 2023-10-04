import React from 'react';
import "./Review.css"

const RestaurantItem = ({ restaurant }) => {
    return (
        <div className="restaurant-item">
            <p className="review-title">Grade: {restaurant.name}</p>
            <p className="review-text">Comment: {restaurant.description}</p>
            <p className="review-text">Comment: {restaurant.website}</p>
            <p className="review-text">Comment: {restaurant.contactNumber}</p>
            <p className="review-text">Comment: {restaurant.contactEmail}</p>
        </div>
    );
}

export default RestaurantItem;
