import {ReviewDetails} from "./Review.style";

const Review = ({review}) => {
    return (
        <ReviewDetails>
            <div>Rating: {review.grade}</div>
            <div>{review.comment}</div>
            <div>Added by: {review.name}</div>
            <div>{review.submissionTime}</div>

        </ReviewDetails>
    )
}

export default Review
