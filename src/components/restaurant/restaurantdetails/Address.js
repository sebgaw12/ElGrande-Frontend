import {useEffect, useState} from "react";
import {useApi} from "../../../hooks/useApi";

const Address = ({restaurant}) => {
    const [addressDetails, setAddressDetails] = useState({})
    const {get} = useApi()


    useEffect(() => {
        get("api/v1/addresses", {restaurantId: restaurant.id})
            .then(response => {setAddressDetails(response)})
    }, []);

    return (
        <div className="text-2xl">
            <div>Adres</div>
            <div>Country: {addressDetails.country}</div>
            <div>City: {addressDetails.city}</div>
            <div>Kod pocztowy: {addressDetails.postalCode}</div>
            <div>Street: {addressDetails.street} {addressDetails.streetNumber}</div>
            <div>{addressDetails.additionalDetails}</div>
        </div>
    )
}

export default Address
