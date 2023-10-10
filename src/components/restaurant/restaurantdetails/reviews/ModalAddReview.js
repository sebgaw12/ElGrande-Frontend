import {initTE, Rating,} from "tw-elements";
import {TEModal, TEModalBody, TEModalContent, TEModalDialog, TEModalFooter, TEModalHeader} from "tw-elements-react";
import RatingStar from "../../../star/RatingStar";

initTE({Rating})


const ModalAddReview = ({onGradeChange, onCommentChange, onSubmit, isOpen, closeModal}) => {

    const buttonStyleClose = 'bg-white text-red-500 hover:bg-red-700 hover:text-white font-bold py-2 px-4 rounded-lg'
    const buttonStyle = 'bg-white text-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-lg'

    return (
        <TEModal show={isOpen} setShow={closeModal}>
            <TEModalDialog>
                <TEModalContent>

                    <TEModalHeader>
                        <h3 className="flex justify-between items-center">Dodaj opinię</h3>
                        <button className={`close-button ${buttonStyleClose}`} onClick={closeModal}>Zamknij</button>
                    </TEModalHeader>

                    <TEModalBody>
                        <form >
                            <label>
                                Ocena:
                                <div id="radio-container" className="flex flex-row justify-center">
                                    <RatingStar initialValue={1} labelText="Ocena" onRatingChange={onGradeChange}/>
                                </div>
                            </label>
                            <label>
                                Komentarz:
                                <div className="text-center">
                                    <textarea id="comment" onChange={onCommentChange} required/>
                                </div>
                            </label>
                        </form>
                    </TEModalBody>

                    <TEModalFooter>
                        <div className='text-center mt-4'>
                            <button
                                type="submit"
                                className={buttonStyle}
                                onClick={onSubmit}>Dodaj
                            </button>
                        </div>
                    </TEModalFooter>

                </TEModalContent>
            </TEModalDialog>
        </TEModal>
    )
}

export default ModalAddReview
