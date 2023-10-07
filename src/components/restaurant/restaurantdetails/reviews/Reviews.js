import React, {useEffect, useState} from "react";

import Review from "./Review";
import {ApiReview} from "../../../../api/ApiReview";
import {toast} from "react-toastify";
import {JWT_TOKEN} from "../../../../constants/constant";
import {useNavigate} from "react-router-dom";
import ModalAddReview from "./ModalAddReview";

const Reviews = (props) => {

    const [reviews, setReviews] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [grade, setGrade] = useState(1)
    const [comment, setComment] = useState('')

    const handleGradeChange = (event) => setGrade(parseInt(event.target.value, 10))
    const handleCommentChange = (event) => setComment(event.target.value)
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    useEffect(() => {
        ApiReview.getReviewByRestaurantId(props.id).then(response => setReviews(response))
    }, [props.id]);

    const handleLoggedInUser = () => {
        const token = localStorage.getItem(JWT_TOKEN)

        if (token) {
            openModal()
        } else {
            closeModal()
            toast.info('Musisz się zalogować aby dodać ocenę', {
                position: 'top-center'
            })
        }
    }

    const token = localStorage.getItem(ACCESS_TOKEN)

    const handleAddReview = async (event) => {
        event.preventDefault()

        try {
            const restaurantId = props.id
            const customerId = JSON.parse(token).id

            await ApiReview.postReview({restaurantId, customerId, comment, grade})

            toast.success('Ocena dodana poprawnie', {
                position: 'top-center',
            })
        } catch (err) {
            toast.error(`Wystąpił błąd podczas dodawania oceny, ${err.message}`, {
                position: 'top-center'
            })
        }
        closeModal()
    }

    useEffect(() => {
        ApiReview.getReviewByRestaurantId(props.id).then(response => setReviews(response))
    }, [props.id, handleAddReview]);

    return (
        <div>
            <div>
                {reviews.length === 0 ? (
                    <div>Brak ocen</div>
                ) : (
                    reviews.map((item, index) => <Review key={index} review={item}/>)
                )}
            </div>
            <button className="border-2 border-black p-2" onClick={handleLoggedInUser}>Dodaj ocenę</button>

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
