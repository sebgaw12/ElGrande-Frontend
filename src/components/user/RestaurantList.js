import React from 'react';
import "./Review.css"

const RestaurantItem = ({isRestaurantOpen, restaurants}) => {

    return (
        <div className="restaurants">
            {isRestaurantOpen && (
                <div className="restaurant-list">
                    {restaurants.map((restaurant) =>
                        <div key={restaurant.id} className="restaurant-item">
                            <p className="review-title">Grade: {restaurant.name}</p>
                            <p className="review-text">Description: {restaurant.description}</p>
                            <p className="review-text">Website: {restaurant.website}</p>
                            <p className="review-text">Contact number: {restaurant.contactNumber}</p>
                            <p className="review-text">Contact email: {restaurant.contactEmail}</p>
                        </div>
                    )}
                </div>
            )}
        </div>

    );
}

export default RestaurantItem;
