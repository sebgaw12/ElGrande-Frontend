import React, {useEffect, useState} from 'react';
import "./Review.css"
import {useUserContext} from "../../context/UserContextProvider";
import {ApiRestaurant} from "../../api/ApiRestaurant";
import {useToggle} from "../../hooks/useToggle";

const RestaurantItem = () => {
    const {user} = useUserContext();
    const [restaurants, setRestaurants] = useState([])
    const {isOpen, toggle} = useToggle()

    useEffect(() => {
        ApiRestaurant.getRestaurantsByUserId(user)
            .then(response => {
                setRestaurants(response)
            })
    }, []);


    return (
        <div className="restaurants">
            <div>
                <button className="show-button" onClick={toggle}>
                    {isOpen ? "Hide restaurants" : "Show restaurants"}
                </button>
            </div>
            {isOpen && (
                <div className="restaurant-list">
                    {restaurants.map((restaurant) =>
                        <div className="restaurant-item">
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
