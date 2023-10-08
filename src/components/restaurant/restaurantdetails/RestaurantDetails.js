import {useEffect, useState} from "react";
import Address from "./Address";
import BusinessHour from "./BusinessHour";
import Reviews from "./reviews/Reviews";
import Details from "./Details";
import {ApiRestaurant} from "../../../api/ApiRestaurant";
import Menus from "./menu/Menus";

const RestaurantDetails = (props) => {

    const DETAILS = 'details'
    const ADDRESS = 'address'
    const REVIEWS = 'reviews'
    const MENU = 'menu'
    const OPENING_HOURS = 'openingHours'

    const [restaurantDetails, setRestaurantDetails] = useState({})
    const [activeComponent, setActiveComponent] = useState(DETAILS)

    const {id} = props

    useEffect(() => {
        ApiRestaurant.getRestaurantDetailsById(props.id).then(response => setRestaurantDetails(response))
    }, [id]);

    const renderActiveComponent = () => {
        switch (activeComponent) {
            case DETAILS:
                return <Details id={restaurantDetails.id} data={restaurantDetails}/>
            case ADDRESS:
                return <Address id={restaurantDetails.id}/>
            case MENU:
                return <Menus id={restaurantDetails.id}/>
            case REVIEWS:
                return <Reviews id={restaurantDetails.id}/>
            case OPENING_HOURS:
                return <BusinessHour id={restaurantDetails.id}/>
            default:
                return <Details id={restaurantDetails.id}/>
        }
    }

    return (
        <div className="flex flex-col gap-4 justify-center w-full">
            <div className="col-span-2 m-0 flex justify-center">
                <button className="m-2 p-1 border-black border-2" onClick={() => setActiveComponent(ADDRESS)}>Adres
                </button>
                <button className="m-2 p-1 border-black border-2" onClick={() => setActiveComponent(MENU)}>Menu</button>
                <button className="m-2 p-1 border-black border-2" onClick={() => setActiveComponent(REVIEWS)}>Opinie
                </button>
                <button className="m-2 p-1 border-black border-2"
                        onClick={() => setActiveComponent(OPENING_HOURS)}>Godziny otwarcia
                </button>
                <button className="m-2 p-1 border-black border-2"
                        onClick={() => setActiveComponent(DETAILS)}>Szczegóły
                </button>
            </div>
            <div className="row-span-2 col-span-2">
                {renderActiveComponent()}
            </div>
        </div>
    )
}
export default RestaurantDetails
