import {useContext, useEffect, useState} from "react";
import {RestaurantContext} from "../../../context/RestaurantContextProvider";
import {useApiAddress} from "../../../api/ApiAddress";

const Address = () => {
    const [addressDetails, setAddressDetails] = useState({})
    const {getAddressByRestaurantId} = useApiAddress()

    const {openRestaurant} = useContext(RestaurantContext)
    const restaurantId = openRestaurant.id

    useEffect(() => {
        getAddressByRestaurantId(restaurantId).then(response => setAddressDetails(response))
    }, [restaurantId]);

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
