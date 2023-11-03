import ReviewItem from "./ReviewList";
import RestaurantItem from "./RestaurantList";
import React, {useState} from "react";
import {useUserContext} from "../../context/UserContextProvider";
import {useToggle} from "../../hooks/useToggle";
import {useApi} from "../../hooks/useApi";

const ReviewRestaurantContainer = () => {

    const {user} = useUserContext()

    const {isOpen: isRestaurantOpen, toggle: toggleRestaurants} = useToggle()
    const {isOpen: isReviewOpen, toggle: toggleReview} = useToggle()

    const [reviews, setReviews] = useState([])
    const [restaurants, setRestaurants] = useState([])

    const {get, remove} = useApi()

    const handleDeleteReview = (e) => {
        setReviews(reviews.filter(review => review.id !== e.target.dataset.id))
        remove("api/v1/reviews/" + e.target.dataset.id)
    }

    const handleShowReview = () => {
        get("api/v1/reviews", {customerId: user})
            .then(response => {
                console.log(response);
                setReviews(response)
                toggleReview()
                if (isRestaurantOpen) {
                    toggleRestaurants()
                }
            })
    }

    const handleShowRestaurant = () => {
        get("api/v1/restaurants", {customerId: user})
            .then(response => {
                setRestaurants(response)
                toggleRestaurants()
                if (isReviewOpen) {
                    toggleReview()
                }
            })
    }
    return (
        <div className="flex flex-col details">
            <div className="flex-row">
                <button className="show-button" onClick={handleShowReview}>
                    {isReviewOpen ? "Hide comments" : "Show comments"}
                </button>
                <button className="show-button" onClick={handleShowRestaurant}>
                    {isRestaurantOpen ? "Hide restaurants" : "Show restaurants"}
                </button>
            </div>
            <div>
                <ReviewItem reviews={reviews} handleDeleteReview={handleDeleteReview} isReviewOpen={isReviewOpen}/>
                <RestaurantItem isRestaurantOpen={isRestaurantOpen} restaurants={restaurants}/>
            </div>
        </div>
    )
}

export default ReviewRestaurantContainer
