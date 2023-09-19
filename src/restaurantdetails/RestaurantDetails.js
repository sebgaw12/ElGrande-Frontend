import {useEffect, useState} from "react";
import Address from "./Address";
import Menu from "./Menu";
import OpeningHours from "./OpeningHours";
import Reviews from "./Reviews";
import Details from "./Details";

const RestaurantDetails = (props) => {

    const DETAILS = 'details'
    const ADDRESS = 'address'
    const REVIEWS = 'reviews'
    const MENU = 'menu'
    const OPENING_HOURS = 'openingHours'

    const [restaurantDetails, setRestaurantDetails] = useState({})
    const [activeComponent, setActiveComponent] = useState(DETAILS)

    useEffect(() => {
        async function getRestaurantDetails() {
            const response = await fetch(`http://localhost:8080/api/v1/restaurants/${props.id}`)
            if (!response.ok ) {
                throw new Error('HTTP error: ' + response.status)
            }
            const data = response.json()
            setRestaurantDetails(await data)
        }

        getRestaurantDetails().catch((err) => console.log("Wystąpił błąd: " + err))
    }, [props.id]);

    const renderActiveComponent = () => {
        switch (activeComponent){
            case DETAILS:
                return <Details id={restaurantDetails.id} data={restaurantDetails}/>
            case ADDRESS:
                return <Address id={restaurantDetails.id}/>
            case MENU:
                return <Menu id={restaurantDetails.id}/>
            case REVIEWS:
                return <Reviews id={restaurantDetails.id}/>
            case OPENING_HOURS:
                return <OpeningHours id={restaurantDetails.id}/>
            default:
                return <Details id={restaurantDetails.id}/>
        }
    }

    return (
        <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="col-span-2 p-0.5">
                <button className="m-2 p-2 border-black border-2" onClick={() => setActiveComponent(ADDRESS)}>Adres</button>
                <button className="m-2 p-2 border-black border-2" onClick={() => setActiveComponent(MENU)}>Menu</button>
                <button className="m-2 p-2 border-black border-2" onClick={() => setActiveComponent(REVIEWS)}>Opinie</button>
                <button className="m-2 p-2 border-black border-2" onClick={() => setActiveComponent(OPENING_HOURS)}>Godziny otwarcia</button>
                <button className="m-2 p-2 border-black border-2" onClick={() => setActiveComponent(DETAILS)}>Szczegóły</button>
            </div>
            <div className="row-span-2 col-span-2">
                {renderActiveComponent()}
            </div>
        </div>
    )
}
export default RestaurantDetails

// todo display menu on button
// todo display open hours
// todo display address
// todo display review