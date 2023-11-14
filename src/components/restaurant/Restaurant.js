import RestaurantDetails from "./restaurantdetails/RestaurantDetails";
import {useToggle} from "../../hooks/useToggle";
import {useRestaurantContext} from "../../context/RestaurantContextProvider";
import {useState} from "react";

const Restaurant = ({restaurant}) => {
    const {handleRestaurantClick} = useRestaurantContext()
    const shadowOutside = 'shadow-md shadow-gray-500'
    const shadowInside = 'shadow-inner shadow-gray-500'

    const [isOpen, setIsOpen] = useState(false)

    const displayRestaurantDetails = () => {
        return (
            <RestaurantDetails setIsOpen={setIsOpen} restaurant={restaurant}/>
        )
    }

    const displayHiddenRestaurantDetails = () => {
        return (
            <div className="flex flex-row justify-around"
                 onClick={() => {
                     setIsOpen(true)
                     handleRestaurantClick(restaurant.id)
                 }}>
                <div className="p-2">{restaurant != null ? restaurant.name : null}</div>
                <div className="p-2">{restaurant != null && restaurant.averageGrade != null
                    ? restaurant.averageGrade.toFixed(1) : 'Brak oceny'}</div>
                <div>kategorie lokalu</div>
                <span className="ml-2">&#9660;</span>
            </div>
        )
    }

    return (
        <div className={`p-2 rounded-xl m-4 bg-gray-300 ${isOpen ? shadowInside : shadowOutside} min-h-[6vh]`}>
            {isOpen ? displayRestaurantDetails() : displayHiddenRestaurantDetails()}
        </div>
    )
}

export default Restaurant;
