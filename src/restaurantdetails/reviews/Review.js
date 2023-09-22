const Review = (props) => {
    return (
        <>
            <div>{props.review.comment}</div>
            <div>Ocena: {props.review.grade}</div>
        </>
    )
}

export default Review
