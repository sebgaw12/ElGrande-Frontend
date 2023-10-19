import {initTE, Rating,} from "tw-elements";
import {TEModal, TEModalBody, TEModalContent, TEModalDialog, TEModalFooter, TEModalHeader} from "tw-elements-react";
import RatingStar from "../../../star/RatingStar";
import {useUpdate} from "../../../../hooks/useUpdate";
import {useState} from "react";

initTE({Rating})


const ModalAddReview = ({
                            onSubmit,
                            isOpen,
                            toggle
                        }) => {
    const buttonStyleClose = 'bg-white text-red-500 hover:bg-red-700 hover:text-white font-bold py-2 px-4 rounded-lg'
    const buttonStyle = 'bg-white text-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-lg'
    const MAX_CHARACTER_COUNT = 250

    const [review, setReview] = useState({
        comment: '',
        grade: 1
    })

    const {updateDataObject} = useUpdate(review, setReview)

    const updateRating = (value) => {
        setReview({
            ...review,
            ["grade"]: value
        })
    }

    const handleSubmit = () => {
        onSubmit(review)
        toggle()
    }

    return (
        <TEModal show={isOpen} setShow={toggle}>
            <TEModalDialog>
                <TEModalContent>

                    <TEModalHeader>
                        <h3 className="flex justify-between items-center">Podziel się opinią o tym miejscu</h3>
                        <button className={`close-button ${buttonStyleClose}`} onClick={toggle}>Zamknij</button>
                    </TEModalHeader>

                    <TEModalBody>
                        <form>
                            <label>
                                Ocena:
                                <div id="radio-container" className="flex flex-row justify-center">
                                    <RatingStar initialValue={1}
                                                labelText="Ocena"
                                                onRatingChange={updateRating}/>
                                </div>
                            </label>
                            <label>
                                Komentarz: (pozostało {MAX_CHARACTER_COUNT - review.comment.length} znaków)
                                <div className="text-center">
                                    <textarea
                                        id="comment"
                                        name="comment"
                                        onChange={updateDataObject}
                                        value={review.comment}
                                        maxLength={MAX_CHARACTER_COUNT}
                                        style={{resize: "none"}}
                                        required/>
                                </div>
                            </label>

                        </form>
                    </TEModalBody>

                    <TEModalFooter>
                        <div className='text-center mt-4'>
                            <button
                                type="submit"
                                className={buttonStyle}
                                onClick={handleSubmit}>Dodaj
                            </button>
                        </div>
                    </TEModalFooter>

                </TEModalContent>
            </TEModalDialog>
        </TEModal>
    )
}

export default ModalAddReview
