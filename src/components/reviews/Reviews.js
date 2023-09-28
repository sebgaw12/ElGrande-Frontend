import {useEffect, useState} from "react";
import Review from "./Review";
import {Api} from "../../api/Api";

const Reviews = (props) => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {

        Api.getReviews(props.id, setReviews).catch((err) => console.log('Wystąpił błąd: ' + err.message))
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
