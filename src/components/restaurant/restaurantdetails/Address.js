import {useEffect, useState} from "react";
import {useApiAddress} from "../../../api/ApiAddress";

const Address = ({restaurantId}) => {
    const [addressDetails, setAddressDetails] = useState({})
    const {getAddressByRestaurantId} = useApiAddress()

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
