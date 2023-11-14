import ReviewItem from "./ReviewList";
import RestaurantItem from "./RestaurantList";
import React, {useState} from "react";
import {useUserContext} from "../../context/UserContextProvider";
import {useToggle} from "../../hooks/useToggle";
import {useApi} from "../../hooks/useApi";
import OwnedRestaurantItem from "./OwnedRestaurantItem";
import {
    ContributeContentList,
    InfoButton,
    OwnedRestaurantGridPlace,
    RestaurantGridPlace,
    ReviewButton,
    ReviewGridPlace,
    UserContributePanel
} from "./UserProfile.styles";

const UserContributeDetails = ({userDetails}) => {

    const {user} = useUserContext()

    const {isOpen: isRestaurantOpen, toggle: toggleRestaurants} = useToggle()
    const {isOpen: isReviewOpen, toggle: toggleReview} = useToggle()
    const {isOpen: isOwnedRestaurantOpen, toggle: toggleOwnedRestaurant} = useToggle()

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
                setReviews(response)
                toggleReview()
                if (isRestaurantOpen) {
                    toggleRestaurants()
                } else if (isOwnedRestaurantOpen) {
                    toggleOwnedRestaurant()
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
                } else if (isOwnedRestaurantOpen) {
                    toggleOwnedRestaurant()
                }
            })
    }

    const handleShowOwnedRestaurant = () => {
        get("api/v1/restaurants", {ownershipId: userDetails.ownershipId})
            .then(response => {
                setRestaurants(response)
                toggleOwnedRestaurant()
                if (isReviewOpen) {
                    toggleReview()
                } else if (isRestaurantOpen) {
                    toggleRestaurants()
                }
            })
    }

    return (
        <UserContributePanel>
            <ReviewGridPlace>
                <InfoButton onClick={handleShowReview}>
                    {isReviewOpen ? "Hide comments" : "Show comments"}
                </InfoButton>
            </ReviewGridPlace>
            <RestaurantGridPlace>
                <InfoButton onClick={handleShowRestaurant}>
                    {isRestaurantOpen ? "Hide restaurants" : "Show restaurants"}
                </InfoButton>
            </RestaurantGridPlace>
            <OwnedRestaurantGridPlace onClick={handleShowOwnedRestaurant}>
                <InfoButton>
                    {isOwnedRestaurantOpen ? "Hide owned restaurants" : "Show owned restaurants"}
                </InfoButton>
            </OwnedRestaurantGridPlace>

            <ContributeContentList>
            </ContributeContentList>
        </UserContributePanel>

//         <ReviewItem reviews={reviews} handleDeleteReview={handleDeleteReview} isReviewOpen={isReviewOpen}/>
//         <RestaurantItem isRestaurantOpen={isRestaurantOpen} restaurants={restaurants}/>
//         <OwnedRestaurantItem isOwnedRestaurantOpen={isOwnedRestaurantOpen} restaurants={restaurants}/>
    )
}

export default UserContributeDetails
