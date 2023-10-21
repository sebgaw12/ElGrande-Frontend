import {Rating, initTE} from "tw-elements";
import {useState} from 'react';
import FilledStar from "./FilledStar";

initTE({Rating});

function RatingStar({labelText, initialValue, onRatingChange}) {

    const [rating, setRating] = useState((initialValue) ? initialValue : 3);

    const handleRatingClick = (ratingValue) => {
        setRating(ratingValue);
        if (onRatingChange) {
            onRatingChange(ratingValue);
        }
    };

    return (
        <ul className="flex justify-center mb-2 mt-2">
            {labelText && <span>{labelText} </span>}
            {[1, 2, 3, 4, 5].map((index) => {
                    let classStyle = `mr-1 h-5 w-5 cursor-pointer ${index <= rating ? 'text-warning' : 'text-gray-400'}`
                    return (
                        <li key={index}>
                            <FilledStar starClass={classStyle} clickFunction={() => handleRatingClick(index)} />
                        </li>

                    )})}
        </ul>
    );
}

export default RatingStar;
