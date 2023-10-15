const Review = ({review}) => {
    return (
        <div className="p-2 border-black border-2 m-2">
            <div>{review.comment}</div>
            <div>Ocena: {review.grade}</div>
            <div>Data dodania: {review.submissionTime}</div>
            <div>Dodał: {review.name}</div>
        </div>
    )
}

export default Review
