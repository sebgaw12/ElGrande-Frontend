import photo from "../static/mock-photo.jpg"
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
                <div className="p-2">
                    <img alt="sushi" src={photo} className="w-fit h-fit"/>
                </div>
                <div className="grid place-content-center">
                    <div className="p-2">{props.restaurant != null ? props.restaurant.name : null}</div>
                    <div className="p-2">tu będzie ocena</div>
                </div>
            </div>
        )
    }

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
        <div className={`flex flex-row p-2 rounded-xl m-4 bg-gray-300 ${shadowClass} justify-items-center`}
             onClick={clickHandler}>
            {isClicked ? displayRestaurantDetails() : hideRestaurantDetails()}
        </div>
    )
}

export default Restaurant;
