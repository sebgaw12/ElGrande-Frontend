import mockPhoto1 from "../../../../images/mock-photo1.jpg";
import mockPhoto2 from "../../../../images/mock-photo2.jpg";
import mockPhoto3 from "../../../../images/mock-photo3.jpg";
import mockPhoto4 from "../../../../images/mock-photo4.jpg";
import mockPhoto5 from "../../../../images/mock-photo5.jpg";
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ImageComponent = () => {
    const images = [
        {
            original: mockPhoto1,
            thumbnail: mockPhoto1
        },
        {
            original: mockPhoto2,
            thumbnail: mockPhoto2
        },
        {
            original: mockPhoto3,
            thumbnail: mockPhoto3
        },
        {
            original: mockPhoto4,
            thumbnail: mockPhoto4
        },
        {
            original: mockPhoto5,
            thumbnail: mockPhoto5
        }]
    return (
        <>
            <ReactImageGallery
                items={images}
                showFullscreenButton={false}
                showPlayButton={false}
            />
        </>
    )
}

export default ImageComponent
