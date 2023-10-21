import {useContext, useEffect, useState} from "react";
import {RestaurantContext} from "../../../context/RestaurantContextProvider";
import {useApi} from "../../../hooks/useApi";

const Address = ({restaurant}) => {
    const [addressDetails, setAddressDetails] = useState({})
    const {get} = useApi()

    // const {openRestaurant} = useContext(RestaurantContext)
    // const restaurantId = openRestaurant.id

    useEffect(() => {
        get("api/v1/addresses", {restaurantId: restaurant.id})
            .then(response => {setAddressDetails(response)})
    }, []);

    return (
        <div className="text-2xl">
            <div>Adres</div>
            <div>Państwo: {addressDetails.country}</div>
            <div>Miasto: {addressDetails.city}</div>
            <div>Kod pocztowy: {addressDetails.postalCode}</div>
            <div>Ulica: {addressDetails.street} {addressDetails.streetNumber}</div>
            <div>{addressDetails.additionalDetails}</div>
        </div>
    )
}

export default Address
