import React from 'react';
import "./Review.css"

const RestaurantItem = ({ restaurant }) => {
    return (
        <div className="restaurant-item">
            <p className="review-title">Grade: {restaurant.name}</p>
            <p className="review-text">Description: {restaurant.description}</p>
            <p className="review-text">Website: {restaurant.website}</p>
            <p className="review-text">Contact number: {restaurant.contactNumber}</p>
            <p className="review-text">Contact email: {restaurant.contactEmail}</p>
        </div>
    );
}

export default RestaurantItem;
