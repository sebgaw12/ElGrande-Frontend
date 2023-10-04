import React, {useState, useEffect} from 'react';
import "./CustomerDetails.css";
import {ApiReview} from "../../api/ApiReview";
import ReviewItem from './Review';
import RestaurantItem from "./Restaurant";
import {ApiRestaurant} from "../../api/ApiRestaurant";
//TODO: delete review, edit customer data, delete customer, add design
const CustomerDetails = () => {
    const [areCommentsVisible, setAreCommentsVisible] = useState(false);
    const [areRestaurantsVisible, setAreRestaurantsVisible] = useState(false)
    const [reviews, setReviews] = useState([]);
    const [restaurants, setRestaurants] = useState([])
    const token = localStorage.getItem("ACCESS_TOKEN")
    const jwt = JSON.parse(token)

    //TODO: method on click
    const fetchReviews = () => {
        ApiReview.getReviewsByUserId(jwt.id)
            .then(data => {
                setReviews(data);
            })
    };

    const fetchRestaurants = () => {
        ApiRestaurant.getRestaurantsByUserId(jwt.id)
            .then(data => {
                setRestaurants(data)
            })
    }

    const toggleCommentsVisibility = () => {
        if (!areCommentsVisible) {
            fetchReviews();
        }
        setAreCommentsVisible(!areCommentsVisible);
    };


    const toggleRestaurantsVisibility = () => {
        if (!areRestaurantsVisible) {
            fetchRestaurants()
        }
        setAreRestaurantsVisible(!areRestaurantsVisible)
    }

    return (
        <div id="profile">
            <div id="details">
                <h1 id="details-header">Profile</h1>
                <div id="details-text">Customer: {jwt.name}</div>
                <div id="details-text">email: {jwt.email}</div>
            </div>
            <div id="comments">
                <div>
                    <button className="show-button" onClick={toggleCommentsVisibility}>
                        {areCommentsVisible ? "Hide comments" : "Show comments"}
                    </button>
                </div>
                {areCommentsVisible && (
                    <div id="reviews-list">
                        {reviews.map((review, index) => (
                            <ReviewItem key={index} review={review}/>
                        ))}
                    </div>
                )}

            </div>
            <div className="restaurants">
                <div>
                    <button className="show-button" onClick={toggleRestaurantsVisibility}>
                        {areRestaurantsVisible ? "Hide restaurants" : "Show restaurants"}
                    </button>
                </div>
                {areRestaurantsVisible && (
                    <div className="restaurant-list">
                        {restaurants.map((restaurant, index) => (
                            <RestaurantItem key={index} restaurant={restaurant}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
        ;
}

export default CustomerDetails;
