import React, {useState} from "react";
import {useToggle} from "../../hooks/useToggle";
import RestaurantEditModal from "./RestaurantEditModal";

const OwnedRestaurantItem = ({isOwnedRestaurantOpen, restaurants}) => {
    const {isOpen: isEditing, toggle: toggleEdit} = useToggle()
    const [restaurantToEdit, setRestaurantToEdit] = useState({})

    const editOwnedRestaurant = (restaurant) => {
        setRestaurantToEdit(restaurant)
        toggleEdit()
    }

    return (
        <div>
            {isOwnedRestaurantOpen && (
                <div className="restaurant-list">
                    {restaurants.map((restaurant) =>
                        <div key={restaurant.id}
                             id={restaurant.id}
                             onClick={() => editOwnedRestaurant(restaurant)}
                        >
                            <p>Name: {restaurant.name}</p>
                        </div>
                    )}
                </div>
            )}
            <RestaurantEditModal
                isOpen={isEditing}
                toggle={toggleEdit}
                restaurant={restaurantToEdit}
            />
        </div>
    )
}


export default OwnedRestaurantItem