import {useEffect, useState} from "react";
import Address from "./Address";
import BusinessHour from "./BusinessHour";
import Reviews from "./reviews/Reviews";
import Details from "./Details";
import {ApiRestaurant} from "../../../api/ApiRestaurant";
import Menus from "./menu/Menus";
import mockPhoto1 from "../../../images/mock-photo1.jpg";

const RestaurantDetails = ({id, onToggle, averageGrade}) => {

    const DETAILS = 'details'
    const ADDRESS = 'address'
    const REVIEWS = 'reviews'
    const MENU = 'menu'
    const OPENING_HOURS = 'openingHours'

    const [restaurantDetails, setRestaurantDetails] = useState({})
    const [activeComponent, setActiveComponent] = useState(DETAILS)

    const buttonStyle = `bg-white text-blue-500 hover:bg-blue-700 
                                hover:text-white font-bold py-2 px-4 rounded-lg m-2`

    useEffect(() => {
        ApiRestaurant.getRestaurantDetailsById(id).then(response => setRestaurantDetails(response))
    }, [id, onToggle]);

    const renderActiveComponent = () => {
        switch (activeComponent) {
            case DETAILS:
                return <Details restaurantId={restaurantDetails.id} data={restaurantDetails}
                                averageGrade={averageGrade}/>
            case ADDRESS:
                return <Address restaurantId={restaurantDetails.id}/>
            case MENU:
                return <Menus restaurantId={restaurantDetails.id}/>
            case REVIEWS:
                return <Reviews restaurantId={restaurantDetails.id}/>
            case OPENING_HOURS:
                return <BusinessHour restaurantId={restaurantDetails.id}/>
            default:
                return <Details restaurantId={restaurantDetails.id} averageGrade={averageGrade}/>
        }
    }

    return (
        <div className="flex flex-col gap-4 justify-center w-full">
            <div className="col-span-2 m-0 flex justify-center">

                <button className={buttonStyle}
                        onClick={() => setActiveComponent(ADDRESS)}>
                    Adres
                </button>

                <button className={buttonStyle}
                        onClick={() => setActiveComponent(MENU)}>
                    Menu
                </button>

                <button className={buttonStyle}
                        onClick={() => setActiveComponent(REVIEWS)}>
                    Opinie
                </button>

                <button className={buttonStyle}
                        onClick={() => setActiveComponent(OPENING_HOURS)}>
                    Godziny otwarcia
                </button>

                <button className={buttonStyle}
                        onClick={() => setActiveComponent(DETAILS)}>
                    Szczegóły
                </button>

                <button onClick={onToggle}
                        className={buttonStyle}
                >Ukryj
                </button>
            </div>
            <div className="flex">
                <div className="w-1/2 h-auto">
                    <img alt="sushi" src={mockPhoto1} className="w-auto h-auto"/>
                </div>
                <div className="ml-4 w-1/2">{renderActiveComponent()}</div>
            </div>

        </div>
    )
}
export default RestaurantDetails
