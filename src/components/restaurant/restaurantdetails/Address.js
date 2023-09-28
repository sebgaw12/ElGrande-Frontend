import {useEffect, useState} from "react";
import {Api} from "../../../api/Api";

const Address = (props) => {

    const [addressDetails, setAddressDetails] = useState({})

    useEffect(() => {

        Api.getAddressByRestaurantId(props.id, setAddressDetails).catch((err) => console.log("Wystąpił błąd: " + err.message))
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
