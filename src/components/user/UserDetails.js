import React, {useContext, useState} from 'react';
import "./UserDetails.css";
import {ApiReview} from "../../api/ApiReview";
import {useNavigate} from "react-router-dom";
import {ApiRestaurant} from "../../api/ApiRestaurant";
import {ApiCustomer} from "../../api/ApiCustomer";
import ReviewItem from "./Review";
import RestaurantItem from "./Restaurant";
import {JWT_TOKEN, LOGGED_IN} from "../../constants/constant";
import {UserContext, UserContextProvider} from "../../context/UserContextProvider";

const UserDetails = () => {
    const [areCommentsVisible, setAreCommentsVisible] = useState(false);
    const [areRestaurantsVisible, setAreRestaurantsVisible] = useState(false)
    const [reviews, setReviews] = useState([]);
    const [restaurants, setRestaurants] = useState([])
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate()
    const {currentUser, userModifier} = useContext(UserContext)

    const fetchReviews = () => {
        ApiReview.getReviewsByUserId(currentUser.customerId)
            .then(data => {
                setReviews(data);
            })
    };

    const fetchRestaurants = () => {
        ApiRestaurant.getRestaurantsByUserId(currentUser.customerId)
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

    const handleEditName = (e) => {
        e.preventDefault()
        userModifier({
            ...currentUser,
            ["name"]: e.target.value
        })
    }

    const handleEditSave = () => {
        setIsEditing(false);
        ApiCustomer.editCustomer(currentUser)
    }

    const handleDeleteProfile = () => {
        const confirmation = window.confirm("Are you sure you want to delete the profile??");
        if (confirmation) {
            localStorage.removeItem(LOGGED_IN)
            document.cookie = JWT_TOKEN + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

            ApiCustomer.deleteCustomer(currentUser.customerId)
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
                        <input value={currentUser != null ? currentUser.name : null} onChange={handleEditName}/>
                        {/*<label className="details-text">Email:</label>*/}
                        {/*<input value={currentUser != null ? currentUser.email : null}/>*/}
                        <button className="edit-button" onClick={handleEditSave}>Save data</button>
                    </div>
                ) : (
                    <div>
                        <span className="details-text">Customer: {currentUser != null ? currentUser.name : null}</span>
                        <span className="details-text">email: {currentUser != null ? currentUser.email : null}</span>
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

export default UserDetails;
