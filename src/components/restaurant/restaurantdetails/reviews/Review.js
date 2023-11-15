const Review = ({review}) => {
    return (
        <div className="p-2 border-black border-2 m-2">
            <div>{review.comment}</div>
            <div>Rating: {review.grade}</div>
            <div>Submission date: {review.submissionTime}</div>
            <div>Added by: {review.name}</div>
        </div>
    )
}

export default Review
