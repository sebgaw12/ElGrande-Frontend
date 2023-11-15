import React, {useState} from "react";
import {useUserContext} from "../../context/UserContextProvider";
import {useToggle} from "../../hooks/useToggle";
import {useApi} from "../../hooks/useApi";
import {
    ContributeContentList,
    InfoButton, InfoButtonClicked,
    OwnedRestaurantGridPlace,
    RestaurantGridPlace,
    ReviewGridPlace,
    UserContributePanel
} from "./UserProfile.styles";
import UserProfileReviewList from "./UserProfileReviewList";
import UserProfileRestaurantList from "./UserProfileRestaurantList";
import UserProfileOwnedRestaurantList from "./UserProfileOwnedRestaurantList";

const UserContributeDetails = ({userDetails}) => {

    const {user} = useUserContext()

    const {isOpen: isRestaurantOpen, toggle: toggleRestaurants} = useToggle()
    const {isOpen: isReviewOpen, toggle: toggleReview} = useToggle()
    const {isOpen: isOwnedRestaurantOpen, toggle: toggleOwnedRestaurant} = useToggle()

    const [reviews, setReviews] = useState([])
    const [restaurants, setRestaurants] = useState([])

    const {get, remove} = useApi()

    const handleDeleteReview = (reviewId) => {
        setReviews(reviews.filter(review => review.id !== reviewId))
        remove("api/v1/reviews/" + reviewId)
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
                {isReviewOpen ? (
                    <InfoButtonClicked onClick={handleShowReview}>Hide comments</InfoButtonClicked>
                ) : (
                    <InfoButton onClick={handleShowReview}>Show comments</InfoButton>
                )}
            </ReviewGridPlace>
            <RestaurantGridPlace>
                {isRestaurantOpen ? (
                    <InfoButtonClicked onClick={handleShowRestaurant}>Hide restaurants</InfoButtonClicked>
                ) : (
                    <InfoButton onClick={handleShowRestaurant}>Show restaurants</InfoButton>
                )}
            </RestaurantGridPlace>
            <OwnedRestaurantGridPlace>
                {isOwnedRestaurantOpen ? (
                    <InfoButtonClicked onClick={handleShowOwnedRestaurant}>Hide owned restaurants</InfoButtonClicked>
                ) : (
                    <InfoButton onClick={handleShowOwnedRestaurant}>Show owned restaurants</InfoButton>
                )}
            </OwnedRestaurantGridPlace>

            <ContributeContentList>
                {isReviewOpen && (
                    <UserProfileReviewList reviews={reviews} handleDeleteReview={handleDeleteReview}/>
                )}
                {isRestaurantOpen && (
                    <UserProfileRestaurantList restaurants={restaurants}/>
                )}
                {isOwnedRestaurantOpen && (
                    <UserProfileOwnedRestaurantList restaurants={restaurants}/>
                )}
            </ContributeContentList>
        </UserContributePanel>
    )
}

export default UserContributeDetails
