import React, {useEffect} from "react";
import Restaurant from "./Restaurant";
import FiltersHeader from "./filtersnavbar/filtersheader/FiltersHeader";
import {useRestaurantContext} from "../../context/RestaurantContextProvider";

const RestaurantList = () => {
    const {getRestaurants, restaurants} = useRestaurantContext()

    useEffect(() => {
        getRestaurants()
    }, [])


    return (
        <div>
            <FiltersHeader/>
            {restaurants.map((restaurant, index) =>
                <Restaurant key={index} restaurant={restaurant}/>
            )}
        </div>
    )
}

export default RestaurantList;
