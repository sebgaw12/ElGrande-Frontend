import React, {createContext, useContext, useState} from "react";
import {useApi} from "../hooks/useApi";

const RestaurantContext = createContext()

export const useRestaurantContext = () => {
    return useContext(RestaurantContext)
}

export const RestaurantContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([])
    const [pageable, setPageable] = useState({
        page: 0,
        sort: '',
        size: 15
    })
    const [openedRestaurantId, setOpenedRestaurantId] = useState(null)
    const {get} = useApi()

    const getRestaurants = () => {
        get("api/v1/restaurants", pageable)
            .then(response => {
                setRestaurants([...restaurants, ...response])
                setPageable({
                    ...pageable,
                    ['page']: pageable.page + 1
                })
            })
    }

    const updateOpenRestaurant = (restaurantId) => {
        get("api/v1/restaurants/" + restaurantId)
            .then(response => {
                const updatedRestaurants = restaurants.map(restaurant => {
                    if (restaurant.id === response.id) {
                        return {...restaurant, ...response}
                    }
                    return restaurant
                })
                setRestaurants(updatedRestaurants)
            })
    }

    const handleRestaurantClick = (restaurantId) => {
        setOpenedRestaurantId(openedRestaurantId === restaurantId ? null : restaurantId)
    }

    return (
        <RestaurantContext.Provider value={{
            getRestaurants,
            restaurants,
            handleRestaurantClick,
            openedRestaurantId,
            updateOpenRestaurant
        }}>
            {children}
        </RestaurantContext.Provider>
    )
}
