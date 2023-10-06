import React, {useEffect, useState} from "react";
import ReactModal from 'react-modal';
import Review from "./Review";
import {ApiReview} from "../../../../api/ApiReview";
import {toast} from "react-toastify";
import {JWT_TOKEN} from "../../../../constants/constant";
import {useNavigate} from "react-router-dom";

const Reviews = (props) => {

    const [reviews, setReviews] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    const modal = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 border rounded-lg shadow-md'
    const modalOverlay = 'fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50'

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

    const handleAddReview = async (event) => {
        event.preventDefault()

        try {
            const restaurantId = props.id
            const customerId = 'a4a67c21-b523-4383-a463-2de333d48af5'
            const comment = document.querySelector("#comment").value
            const grade = document.querySelector("#grade").value

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

            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Dodaj ocenę"
                className={modal}
                overlayClassName={modalOverlay}>
                <button className="close-button" onClick={closeModal}>Zamknij</button>
                <form onSubmit={handleAddReview}>
                    <label>
                        Ocena:
                        <input id="grade" type="number" min="1" max="10" required/>
                    </label>
                    <label>
                        Komentarz:
                        <textarea id="comment" required/>
                    </label>
                    <button
                        type="submit"
                        className="border-2 border-black p-2"
                    >Dodaj
                    </button>
                </form>
            </ReactModal>
        </div>
    )
}

export default Reviews
// todo spróbować połączyć z naszym jwt
