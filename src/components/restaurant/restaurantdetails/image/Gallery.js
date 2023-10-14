import mockPhoto1 from "../../../../images/mock-photo1.jpg";
import mockPhoto2 from "../../../../images/mock-photo2.jpg";
import mockPhoto3 from "../../../../images/mock-photo3.jpg";
import mockPhoto4 from "../../../../images/mock-photo4.jpg";
import mockPhoto5 from "../../../../images/mock-photo5.jpg";
import {useState} from "react";
import ModalForImages from "./ModalForImages";

const Gallery = () => {

    const images = [mockPhoto1, mockPhoto2, mockPhoto3, mockPhoto4, mockPhoto5]

    const [modalOpen, setModalOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const openModal = (index) => {
        setCurrentIndex(index)
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    const showNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const showPrevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="w-full">
            <div className="flex flex-wrap mx-2">
                {images.map((image, index) => (
                    <div key={index}
                         className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2 cursor-pointer"
                         onClick={() => openModal(index)}
                    >
                        <img src={image}
                             alt={`Image ${index + 1}`}
                             className="w-full"/>
                    </div>
                ))}
            </div>

            <ModalForImages closeModal={closeModal}
                            showPrevImage={showPrevImage}
                            showNextImage={showNextImage}
                            currentIndex={currentIndex}
                            images={images}
                            modalOpen={modalOpen}/>

        </div>
    )
}

export default Gallery
