import React, {createContext, useState} from "react";

export const RestaurantContext = createContext()

export const RestaurantContextProvider = ({children}) => {

    const [openRestaurantId, setOpenRestaurantId] = useState(null)

    const handleRestaurantClick = (restaurantId) => {
        setOpenRestaurantId((prevId) => prevId === restaurantId ? null : restaurantId)
    }

    return (
        <RestaurantContext.Provider value={{openRestaurantId, handleRestaurantClick}}>
            {children}
        </RestaurantContext.Provider>
    )
}
