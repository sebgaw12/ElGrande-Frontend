import RestaurantDetails from "./restaurantdetails/RestaurantDetails";
import {useToggle} from "../../hooks/useToggle";

const Restaurant = ({restaurant}) => {
    const shadowOutside = 'shadow-md shadow-gray-500'
    const shadowInside = 'shadow-inner shadow-gray-500'

    const {isOpen, toggle} = useToggle()

    const displayRestaurantDetails = () => {
        return (
            <>
                <RestaurantDetails toggle={toggle} restaurant={restaurant}/>
            </>
        )
    }

    const hideRestaurantDetails = () => {
        return (
            <div className="flex flex-row justify-around"
                 onClick={toggle}>
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
            {isOpen ? displayRestaurantDetails() : hideRestaurantDetails()}
        </div>
    )
}

export default Restaurant;
