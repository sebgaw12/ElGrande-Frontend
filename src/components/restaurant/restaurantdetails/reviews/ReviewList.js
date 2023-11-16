import React, {useEffect, useState} from "react";
import Review from "./Review";
import ModalAddReview from "./ModalAddReview";
import {useUserContext} from "../../../../context/UserContextProvider";
import {useApi} from "../../../../hooks/useApi";
import {useToggle} from "../../../../hooks/useToggle";
import {useRestaurantContext} from "../../../../context/RestaurantContextProvider";
import {AddReviewStyleBtn} from "./Review.style";

const ReviewList = ({restaurant}) => {

    const [reviews, setReviews] = useState([])
    const {user} = useUserContext()
    const {get, post} = useApi()
    const {isOpen, toggle} = useToggle()
    const {updateOpenRestaurant} = useRestaurantContext()

    useEffect(() => {
        get("api/v1/reviews/details", {restaurantId: restaurant.id})
            .then(response => setReviews(response))
    }, []);

    const handleAddReview = (newReview) => {
        post("api/v1/reviews", {
            comment: newReview.comment,
            grade: newReview.grade,
            customerId: user,
            restaurantId: restaurant.id
        })
            .then(response => {
                setReviews([...reviews, response])
                updateOpenRestaurant(restaurant.id)
            })
    }

    return (
        <div>
            {user ? (
                <AddReviewStyleBtn onClick={toggle}>Add review</AddReviewStyleBtn>
            ) : (
                <></>
            )}
            <div>
                {reviews.length === 0 ? (
                    <div>No reviews yet</div>
                ) : (
                    reviews.map((item, index) => <Review key={index} review={item}/>)
                )}
            </div>

            <ModalAddReview
                onSubmit={handleAddReview}
                isOpen={isOpen}
                toggle={toggle}
            />
        </div>
    )

}

export default ReviewList
