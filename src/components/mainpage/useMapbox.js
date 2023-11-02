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

    /**
     * Converts address data from a Mapbox API response into structured address and coordinates.
     * Response returns array of addresses sorted by relevance.
     *
     * @param {object} address - The address data used as input for the conversion.
     * @returns {object} An object containing structured address and coordinates.
     */
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

        /**
         * center[1] and center[0] represents indexes for the latitude and longitude in response
         * @type {{latitude: number, longitude: number}}
         */
        const newCoordinates = {
            latitude: resp.features[0].center[1],
            longitude: resp.features[0].center[0]
        }

        /**
         * Match function returns array containing the results of that search. Indexes are best matches for searching.
         * @type {{country: string, city: string, streetNumber: string, street: string, postalCode: string, additionalDetails: (string|null)}}
         */
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
