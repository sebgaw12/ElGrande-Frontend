import React, {useEffect, useState} from "react";
import Restaurant from "../restaurant/Restaurant";

const Restaurants = props => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function getAllRestaurants() {
            const response = await fetch("http://localhost:8080/api/v1/restaurants")
            if (!response.ok) {
                throw new Error('HTTP error: ' + response.status)
            }
            const data = await response.json()
            setData(data)
        }

        getAllRestaurants().catch((error) => console.log("błąd podczas pobierania danych: " + error))
    }, [])
    console.log(data);

    return (
        <>
            {data.map((profile, index) => <Restaurant key={index} restaurant={profile}/>)}
        </>
    )
}

export default Restaurants;
