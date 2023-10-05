import React, {useState} from 'react';
import "./CustomerDetails.css";
import "./Review.css"
import {ApiReview} from "../../api/ApiReview";
import ReviewItem from './Review';
import RestaurantItem from "./Restaurant";
import {ApiRestaurant} from "../../api/ApiRestaurant";
import {ApiCustomer} from "../../api/ApiCustomer";
import {useNavigate} from "react-router-dom";
//TODO: change design, read about hook to toggle
const CustomerDetails = () => {
    const [areCommentsVisible, setAreCommentsVisible] = useState(false);
    const [areRestaurantsVisible, setAreRestaurantsVisible] = useState(false)
    const [reviews, setReviews] = useState([]);
    const [restaurants, setRestaurants] = useState([])
    const token = localStorage.getItem("ACCESS_TOKEN")
    const jwt = JSON.parse(token)
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(jwt.name);
    const [editedEmail, setEditedEmail] = useState(jwt.email);
    const navigate = useNavigate()

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

    const handleEditSave = () => {
        jwt.name = editedName;
        jwt.email = editedEmail;
        localStorage.setItem("ACCESS_TOKEN", JSON.stringify(jwt));
        setIsEditing(false);
        ApiCustomer.editCustomer(jwt.id, jwt.name, jwt.email)
    }

    const handleDeleteProfile = () => {
        const confirmation = window.confirm("Are you sure you want to delete the profile??");
        if (confirmation) {
            localStorage.removeItem("ACCESS_TOKEN")
            ApiCustomer.deleteCustomer(jwt.id)
            navigate('/main-page')
        }
    }

    return (
        <div id="profile">
            <div id="details">
                <h1 id="details-header">Profile</h1>
                {isEditing ? (
                    <div>
                            <label className="details-text">Customer Name:</label>
                            <input value={editedName} onChange={e => setEditedName(e.target.value)}/>
                            <label className="details-text">Email:</label>
                            <input value={editedEmail} onChange={e => setEditedEmail(e.target.value)}/>
                            <button className="edit-button" onClick={handleEditSave}>Save data</button>
                    </div>
                ) : (
                    <div>
                        <span className="details-text">Customer: {jwt.name}</span>
                        <span className="details-text">email: {jwt.email}</span>
                        <button className="edit-button" onClick={() => setIsEditing(true)}>Edit data</button>
                        <button className="delete-button" onClick={handleDeleteProfile}>Delete profile</button>
                    </div>
                )}
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
