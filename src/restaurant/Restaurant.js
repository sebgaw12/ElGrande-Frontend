import {useState} from "react";
import RestaurantDetails from "../restaurantdetails/RestaurantDetails";

const Restaurant = (props) => {

    const shadowOutside = 'shadow-md shadow-gray-500'
    const shadowInside = 'shadow-inner shadow-gray-500'

    const [shadowClass, setShadowClass] = useState(shadowOutside)
    const [isClicked, setIsClicked] = useState(false)

    const displayRestaurantDetails = () => {
        return (
            <div>
                <RestaurantDetails id={props.restaurant.id}/>
            </div>
        )
    }

    const hideRestaurantDetails = () => {
        return (
            <div className="flex flex-row">
                <div className="p-2">{props.restaurant != null ? props.restaurant.name : null}</div>
                <div className="p-2">tu będzie ocena</div>
            </div>
        )
    }
// todo add new restaurant on button (header with login and register buttons)
    const clickHandler = () => {
        if (!isClicked) {
            setShadowClass(shadowInside)
            setIsClicked(true)
        } else {
            setShadowClass(shadowOutside)
            setIsClicked(false)
        }
    }

    return (
        <div className={`flex flex-row p-2 rounded-xl m-4 bg-gray-300 ${shadowClass} justify-items-center`}>
            {isClicked ? displayRestaurantDetails() : hideRestaurantDetails()}
            <button onClick={clickHandler} className="m-2 p-2 border-black border-2">{isClicked ? "Ukryj" : "Pokaż szczegóły"}</button>
        </div>
    )
}

export default Restaurant;
