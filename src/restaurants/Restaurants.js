import React, {useEffect, useState} from "react";
import Restaurant from "../restaurant/Restaurant";

const Restaurants = props => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData () {
            const response = await fetch("http://localhost:8080/api/v1/restaurants")
            const data = await response.json()
            setData(data)
        }
        fetchData()
    }, [])
    console.log(data);

    return (
        <div>
            {data.map((profile, index) => <Restaurant key={index} restaurant={profile} />)}
        </div>
    )
}

export default Restaurants;
