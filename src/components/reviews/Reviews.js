import {useEffect, useState} from "react";
import {ApiReview} from "../../api/ApiReview";

const Reviews = (props) => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        ApiReview.getReviewByRestaurantId(props.id).then(response => setReviews(response))
    }, [props.id]);

    console.log(reviews);
    return (
        <div>
            {reviews.length === 0 ? (
                <div>Brak ocen</div>
            ):(
                reviews.map((item, index) => <Review key={index} review={item}/>)
            )}
        </div>
    )
}

export default Reviews
