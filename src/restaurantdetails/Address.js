import {useEffect, useState} from "react";

const Address = (props) => {

    const [addressDetails, setAddressDetails] = useState({})

    useEffect(() => {
        async function getAddressByRestaurantId() {
            const response = await fetch(`http://localhost:8080/api/v1/addresses?restaurantId=${props.id}`)
            if (!response.ok) {
                throw new Error('HTTP error: ' + response.status)
            }
            const data = response.json()
            setAddressDetails(await data)
        }

        getAddressByRestaurantId().catch((err) => console.log("Wystąpił błąd: " + err.message))
    }, [props.id]);

    console.log(addressDetails);
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
