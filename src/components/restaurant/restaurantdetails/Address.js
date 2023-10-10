import {useEffect, useState} from "react";
import {ApiAddress} from "../../../api/ApiAddress";

const Address = ({restaurantId}) => {

    const [addressDetails, setAddressDetails] = useState({})

    useEffect(() => {
        ApiAddress.getAddressByRestaurantId(restaurantId).then(response => setAddressDetails(response))
    }, [restaurantId]);

    return (
        <div>
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
