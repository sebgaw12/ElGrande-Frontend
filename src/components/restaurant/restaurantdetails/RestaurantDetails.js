import {useEffect, useState} from "react";
import Address from "./Address";
import BusinessHour from "./BusinessHour";
import ReviewList from "./reviews/ReviewList";
import Details from "./Details";
import MenuList from "./menu/MenuList";
import {ADDRESS, DETAILS, MENU, OPENING_HOURS, REVIEWS} from "../../../constants/RestaurantDetailsTabs";
import ImageComponent from "./image/ImageComponent";
import {useRestaurantContext} from "../../../context/RestaurantContextProvider";

const RestaurantDetails = ({setIsOpen, restaurant}) => {
    const {openedRestaurantId, handleRestaurantClick} = useRestaurantContext()
    const [activeComponent, setActiveComponent] = useState(DETAILS)
    const buttonStyle = `bg-white text-blue-500 hover:bg-blue-700 
                                hover:text-white font-bold py-2 px-4 rounded-lg m-2`

    useEffect(() => {
        setIsOpen(openedRestaurantId === restaurant.id)
    }, [openedRestaurantId]);
    const renderActiveComponent = () => {
        switch (activeComponent) {
            case DETAILS:
                return <Details restaurant={restaurant}/>
            case ADDRESS:
                return <Address restaurant={restaurant}/>
            case MENU:
                return <MenuList restaurant={restaurant}/>
            case REVIEWS:
                return <ReviewList restaurant={restaurant}/>
            case OPENING_HOURS:
                return <BusinessHour restaurant={restaurant}/>
            default:
                return <Details restaurant={restaurant}/>
        }
    }

    return (
        <div className="flex flex-col gap-4 justify-center w-full">
            <div className="col-span-2 m-0 flex justify-center">

                <button className={buttonStyle}
                        onClick={() => setActiveComponent(ADDRESS)}>
                    Address
                </button>

                <button className={buttonStyle}
                        onClick={() => setActiveComponent(MENU)}>
                    Menu
                </button>

                <button className={buttonStyle}
                        onClick={() => setActiveComponent(REVIEWS)}>
                    Reviews
                </button>

                <button className={buttonStyle}
                        onClick={() => setActiveComponent(OPENING_HOURS)}>
                    Opening hours
                </button>

                <button className={buttonStyle}
                        onClick={() => setActiveComponent(DETAILS)}>
                    Details
                </button>

                <button onClick={() => {
                    setIsOpen(false)
                    handleRestaurantClick(restaurant.id)
                }}
                        className={buttonStyle}
                >Hide
                </button>
            </div>
            <div className="flex">
                <div className="w-1/2 h-auto">
                    <ImageComponent/>
                    {/*<Gallery/>*/}
                </div>
                <div className="ml-4 w-1/2 kalam">{renderActiveComponent()}</div>
            </div>

        </div>
    )
}
export default RestaurantDetails
