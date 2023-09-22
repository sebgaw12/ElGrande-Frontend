import {useEffect, useState} from "react";
import Review from "./Review";

const Reviews = (props) => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {

        async function getReviews() {
            const response = await fetch(`http://localhost:8080/api/v1/reviews?restaurantId=${props.id}`)

            if (!response.ok){
                throw new Error('HTTP error: ' + response.status)
            }

            const data= response.json()
            setReviews(await data)
        }
        getReviews().catch((err) => console.log('Wystąpił błąd: ' + err.message))
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
