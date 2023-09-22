import React, {useEffect, useState} from "react";
import Restaurant from "../restaurant/Restaurant";

const Restaurants = () => {

    const [data, setData] = useState([]);
    const [openRestaurantId, setOpenRestaurantId] = useState(null);

    useEffect(() => {
        async function getAllRestaurants() {
            const response = await fetch("http://localhost:8080/api/v1/restaurants?page=0&size=5&sort=name")
            if (!response.ok) {
                throw new Error('HTTP error: ' + response.status)
            }
            const data = await response.json()
            setData(data)
        }

        getAllRestaurants().catch((error) => console.log("błąd podczas pobierania danych: " + error))
    }, [])
    const handleRestaurantClick = (restaurantId) => {
        setOpenRestaurantId((prevId) => (prevId === restaurantId ? null : restaurantId))
    }

    return (
        <>
            {data.map((profile, index) => <Restaurant
                key={index}
                restaurant={profile}
                isOpen={openRestaurantId === profile.id}
                onToggle={() => handleRestaurantClick(profile.id)}
            />
            )}
        </>
    )
}

export default Restaurants;
