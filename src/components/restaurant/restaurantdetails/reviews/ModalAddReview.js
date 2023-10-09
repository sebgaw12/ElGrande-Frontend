import ReactModal from 'react-modal';

const ModalAddReview = (props) => {

    const modal = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 border rounded-lg shadow-md'
    const modalOverlay = 'fixed top-0 left-0 right-0 bottom-0 bg-black opacity-90'
    const buttonStyleClose = 'bg-white text-red-500 hover:bg-red-700 hover:text-white font-bold py-2 px-4 rounded-lg'
    const buttonStyle = 'bg-white text-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-lg'

    return (
        <>
            <ReactModal
                isOpen={props.isOpen}
                onRequestClose={props.closeModal}
                contentLabel="Dodaj ocenę"
                className={modal}
                overlayClassName={modalOverlay}>

                <div className="flex justify-between items-center">
                    <h2 className="text-center text-xl">Dodaj ocenę</h2>
                    <button className={`close-button ${buttonStyleClose}`} onClick={props.closeModal}>Zamknij</button>
                </div>

                <form onSubmit={props.onSubmit}>
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
                                        onChange={props.onGradeChange}
                                        required/><br/>
                                    <label htmlFor={`radio-${index}`}>{index + 1}</label>
                                </div>
                            ))}
                        </div>
                    </label>
                    <label>
                        Komentarz:
                        <div className="text-center">
                            <textarea id="comment" onChange={props.onCommentChange} required/>
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
        </>
    )
}

export default ModalAddReview
