import React, {createContext, useCallback, useState} from "react";
import {useApiRestaurant} from "../api/ApiRestaurant";

export const RestaurantContext = createContext({
    openRestaurant: {},
    handleRestaurantClick: () => {
    },
    updateOpenRestaurant: () => {
    }
})

export const RestaurantContextProvider = ({children}) => {

    const [openRestaurant, setOpenRestaurant] = useState({})
    const {getDetailedRestaurantById} = useApiRestaurant()

    const updateOpenRestaurant = useCallback((restaurantId) => {
        getDetailedRestaurantById(restaurantId)
            .then((details) => {
                setOpenRestaurant(details)
            })
    }, [])

    const handleRestaurantClick = (restaurant) => {
        if (!openRestaurant) {
            setOpenRestaurant(restaurant)
            return
        }
        setOpenRestaurant(openRestaurant.id === restaurant.id ? null : restaurant)
    }

    return (
        <RestaurantContext.Provider value={{openRestaurant, handleRestaurantClick, updateOpenRestaurant}}>
            {children}
        </RestaurantContext.Provider>
    )
}
