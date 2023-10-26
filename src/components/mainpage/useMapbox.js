import axios from "axios";

export const useMapbox = () => {

    const {REACT_APP_MAP_API_KEY} = process.env
    const getFullAddressFromResponse = (address) => {

        const placeQuery = `${address.street}%20${address.streetNumber}%20${address.postalCode}%20${address.city}.json`

        return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${placeQuery}`, {
            params: {
                language: 'pl',
                access_token: REACT_APP_MAP_API_KEY
            }
        })
            .then(response => {
                console.log(response);
                if (response.status !== 200) {
                    throw new Error("Network response was not ok")
                }
                return response.data
            })
            .catch(error => {
                console.error("Error fetching data: ", error)
                throw error
            })
    }

    const setAddressFromMapApi = async (address) => {
        const resp = await getFullAddressFromResponse(address)
        const responseAddress = resp.features[0].place_name

        const regex = {
            street: /(.+?)\s\d+,/,
            number: /(\d+),/,
            postalCode: /(\d{2}-\d{3})/,
            city: /(\d{2}-\d{3}\s(.+?)),/,
            country: /,([^,]+)$/
        }

        const newCoordinates = {
            latitude: resp.features[0].center[1],
            longitude: resp.features[0].center[0]
        }
//todo clear magic numbers, write javadocs
        /**
         *
         * */
        const newAddress = {
            country: responseAddress.match(regex.country)[1].trim(),
            city: responseAddress.match(regex.city)[2],
            postalCode: responseAddress.match(regex.postalCode)[1],
            street: responseAddress.match(regex.street)[1],
            streetNumber: responseAddress.match(regex.number)[1],
            additionalDetails: address.additionalDetails
        }

        return {newCoordinates, newAddress}
    }

    return {setAddressFromMapApi}
}
