import React, {useContext, useEffect, useState} from "react";

import Review from "./Review";
import {ApiReview} from "../../../../api/ApiReview";
import {toast} from "react-toastify";
import ModalAddReview from "./ModalAddReview";
import {UserContext} from "../../../../context/UserContextProvider";

const Reviews = ({restaurantId}) => {

    const [reviews, setReviews] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [grade, setGrade] = useState(1)
    const [comment, setComment] = useState('')

    const {currentUser, isLoggedIn} = useContext(UserContext)

    const handleGradeChange = (newGrade) => setGrade(newGrade)
    const handleCommentChange = (event) => setComment(event.target.value)
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    const handleLoggedInUser = () => {
        if (isLoggedIn) {
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
            const customerId = currentUser.customerId

            await ApiReview.postReview({restaurantId, customerId, comment, grade})

            toast.success('Ocena dodana poprawnie', {
                position: 'top-center',
            })
            getReviews()
        } catch (err) {
            toast.error(`Wystąpił błąd podczas dodawania oceny, ${err.message}`, {
                position: 'top-center'
            })
        }
        closeModal()
    }

    const getReviews = () => {
        ApiReview.getReviewByRestaurantId(restaurantId).then(response => setReviews(response))
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
