import React, {useEffect, useState} from "react";
import ReactModal from 'react-modal';
import Review from "./Review";
import {ApiReview} from "../../../../api/ApiReview";
import {toast} from "react-toastify";
import {ACCESS_TOKEN} from "../../../../constants/constant";

const Reviews = (props) => {

    const [reviews, setReviews] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    const modal = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 border rounded-lg shadow-md'
    const modalOverlay = 'fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50'
    const buttonStyleClose = 'bg-white text-red-500 hover:bg-red-700 hover:text-white font-bold py-2 px-4 rounded-lg'
    const buttonStyle = 'bg-white text-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-lg'

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    useEffect(() => {
        ApiReview.getReviewByRestaurantId(props.id).then(response => setReviews(response))
    }, [props.id]);

    const handleLoggedInUser = () => {
        const token = localStorage.getItem(ACCESS_TOKEN)

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

            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Dodaj ocenę"
                className={modal}
                overlayClassName={modalOverlay}>

                <div className="flex justify-between items-center">
                    <h2 className="text-center text-xl">Dodaj ocenę</h2>
                    <button className={`close-button ${buttonStyleClose}`} onClick={closeModal}>Zamknij</button>
                </div>

                <form onSubmit={handleAddReview}>
                    <label>
                        Ocena:
                        <div id="radio-container" className="flex flex-row justify-center">
                            {Array.from({length: 10}, (_, index) => (
                                <div key={index} className="p-1 text-center">
                                    <input
                                        type="radio"
                                        name="grade"
                                        value={index + 1}
                                        id={`radio-${index}`}
                                        required/><br/>
                                    <label htmlFor={`radio-${index}`}>{index + 1}</label>
                                </div>
                            ))}
                        </div>
                    </label>
                    <label>
                        Komentarz:
                        <div className="text-center">
                            <textarea id="comment" required/>
                        </div>
                    </label>
                    <div className='text-center mt-4'>
                        <button
                            type="submit"
                            className={buttonStyle}>Dodaj
                        </button>
                    </div>
                </form>
            </ReactModal>
        </div>
    )
}

export default Reviews
