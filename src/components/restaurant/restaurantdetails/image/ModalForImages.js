import {TEModal, TEModalBody, TEModalContent, TEModalDialog, TEModalFooter, TEModalHeader} from "tw-elements-react";

const ModalForImages = ({
                            closeModal,
                            images,
                            currentIndex,
                            showPrevImage,
                            showNextImage,
                            modalOpen
                        }) => {
    return (
        <TEModal show={modalOpen} setShow={closeModal}>
            <TEModalDialog>
                <TEModalContent>

                    <TEModalHeader>
                        {/* close button */}
                        <div></div>
                        <button
                            className="top-4 left-4 text-2xl text-black cursor-pointer"
                            onClick={closeModal}
                        >
                            &times;
                        </button>

                    </TEModalHeader>

                    <TEModalBody>
                        <div className="flex max-w-screen-lg bg-white p-4">
                            <img
                                src={images[currentIndex]}
                                alt={`Image ${currentIndex + 1}`}
                                className="max-h-screen mx-auto"
                            />
                        </div>
                    </TEModalBody>

                    <TEModalFooter>
                        <div className="flex justify-between">
                            {/* previous button */}
                            <button
                                className="flex top-1/2 left-4 transform -translate-y-1/2 text-4xl text-black cursor-pointer"
                                onClick={showPrevImage}
                            >
                                &#9664;
                            </button>

                            {/* next button */}
                            <button
                                className="flex top-1/2 right-4 transform -translate-y-1/2 text-4xl text-black cursor-pointer"
                                onClick={showNextImage}
                            >
                                &#9654;
                            </button>
                        </div>
                    </TEModalFooter>
                </TEModalContent>
            </TEModalDialog>
        </TEModal>
    )
}

export default ModalForImages
