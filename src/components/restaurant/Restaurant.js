import RestaurantDetails from "./restaurantdetails/RestaurantDetails";
import {useRestaurantContext} from "../../context/RestaurantContextProvider";
import {useState} from "react";
import {RestaurantContainer, RestaurantDetailsContainer} from "./Restaurant.styles";

const Restaurant = ({restaurant}) => {
    const {handleRestaurantClick} = useRestaurantContext()

    const [isOpen, setIsOpen] = useState(false)

    const displayRestaurantDetails = () => {
        return (
            <RestaurantDetails setIsOpen={setIsOpen} restaurant={restaurant}/>
        )
    }

    const displayHiddenRestaurantDetails = () => {
        return (
            <RestaurantDetailsContainer
                 onClick={() => {
                     setIsOpen(true)
                     handleRestaurantClick(restaurant.id)
                 }}>
                <div>{restaurant != null ? restaurant.name : null}</div>
                <div>{restaurant != null && restaurant.averageGrade != null
                    ? restaurant.averageGrade.toFixed(1) : 'Brak oceny'}</div>
                <div>kategorie lokalu</div>
                <span>&#9660;</span>
            </RestaurantDetailsContainer>
        )
    }

    return (
        <RestaurantContainer isOpen={isOpen}>
            {isOpen ? displayRestaurantDetails() : displayHiddenRestaurantDetails()}
        </RestaurantContainer>
    )
}

export default Restaurant;
