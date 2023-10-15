import React, {useContext, useEffect, useState} from "react";
import Review from "./Review";
import {useApiReview} from "../../../../api/ApiReview";
import {toast} from "react-toastify";
import ModalAddReview from "./ModalAddReview";
import {useUserContext} from "../../../../context/UserContextProvider";
import {RestaurantContext} from "../../../../context/RestaurantContextProvider";


const Reviews = () => {

    const [reviews, setReviews] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [grade, setGrade] = useState(1)
    const [comment, setComment] = useState('')
    const {getAllReviewByRestaurantId, postReview} = useApiReview()

    const {user} = useUserContext()
    const {openRestaurant, updateOpenRestaurant} = useContext(RestaurantContext)
    const restaurantId = openRestaurant.id

    const handleGradeChange = (newGrade) => setGrade(newGrade)
    const handleCommentChange = (event) => setComment(event.target.value)
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    const handleLoggedInUser = () => {
        if (user) {
            openModal()
        } else {
            closeModal()
            toast.info('Musisz się zalogować aby dodać ocenę', {
                position: 'top-center'
            })
        }
    }

    const handleAddReview = async (event) => {
        event.preventDefault()

        try {
            const customerId = user
            await postReview({restaurantId, customerId, comment, grade})

            toast.success('Ocena dodana poprawnie', {
                position: 'top-center',
            })
            getReviews()
            updateOpenRestaurant(restaurantId)

            // ApiRestaurant.getRestaurantDetailsById(restaurantId).then(response => setRestaurantDetails(response))
        } catch (err) {
            toast.error(`Wystąpił błąd podczas dodawania oceny, ${err.message}`, {
                position: 'top-center'
            })
        }
        closeModal()
    }

    const getReviews = () => {
        getAllReviewByRestaurantId(restaurantId).then(response => setReviews(response))
    }

    useEffect(() => {
        getReviews()
    }, [restaurantId]);

    return (
        <div>
            <button className="border-2 border-black p-2" onClick={handleLoggedInUser}>Dodaj ocenę</button>
            <div>
                {reviews.length === 0 ? (
                    <div>Brak ocen</div>
                ) : (
                    reviews.map((item, index) => <Review key={index} review={item}/>)
                )}
            </div>

            <ModalAddReview
                onSubmit={handleAddReview}
                isOpen={isModalOpen}
                closeModal={closeModal}
                grade={grade}
                comment={comment}
                onGradeChange={handleGradeChange}
                onCommentChange={handleCommentChange}
            />

        </div>
    )
}

export default Reviews
