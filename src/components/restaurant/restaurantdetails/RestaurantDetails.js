import {useContext, useEffect, useState} from "react";
import Address from "./Address";
import BusinessHour from "./BusinessHour";
import Reviews from "./reviews/Reviews";
import Details from "./Details";
import Menus from "./menu/Menus";
import ImageComponent from "./image/ImageComponent";
import {ADDRESS, DETAILS, MENU, OPENING_HOURS, REVIEWS} from "../../../constants/RestaurantDetailsTabs";
import {RestaurantContext} from "../../../context/RestaurantContextProvider";

const RestaurantDetails = ({onToggle, averageGrade}) => {

    const [activeComponent, setActiveComponent] = useState(DETAILS)

    const buttonStyle = `bg-white text-blue-500 hover:bg-blue-700 
                                hover:text-white font-bold py-2 px-4 rounded-lg m-2`

    const {updateOpenRestaurant, openRestaurant} = useContext(RestaurantContext)

    useEffect(() => {
        updateOpenRestaurant(openRestaurant.id)
    }, [openRestaurant.id]);

// todo change request for restaurant details to response average grade
    const renderActiveComponent = () => {
        switch (activeComponent) {
            case DETAILS:
                return <Details averageGrade={averageGrade}/>
            case ADDRESS:
                return <Address/>
            case MENU:
                return <Menus/>
            case REVIEWS:
                return <Reviews/>
            case OPENING_HOURS:
                return <BusinessHour/>
            default:
                return <Details averageGrade={averageGrade}/>
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
                    <ImageComponent/>
                </div>
                <div className="ml-4 w-1/2 kalam">{renderActiveComponent()}</div>
            </div>

        </div>
    )
}
export default RestaurantDetails
