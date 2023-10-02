import {useEffect, useState} from "react";
import {ApiAddress} from "../../../api/ApiAddress";

const Address = (props) => {

    const [addressDetails, setAddressDetails] = useState({})

    useEffect(() => {
        ApiAddress.getAddressByRestaurantId(props.id).then(response => setAddressDetails(response))
    }, [props.id]);

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
