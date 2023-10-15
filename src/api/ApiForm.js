import axios from "axios";
import {SERVER_URL} from "../constants/RoutePaths";


export const useApiForm = () => {
    const postRestaurant = (data) => {
        return axios.post(SERVER_URL + 'api/v1/forms/restaurant',
            JSON.stringify(data)
            , {
                headers: {
                    'Content-Type': "application/json"
                },
                withCredentials: true
            })
            .then(response => {
                if (response.status !== 201) {
                    throw new Error("Network response was not created")
                }
                return response.data
            })
            .catch(error => {
                console.error("Error fetching data: ", error)
                throw error
            })
    }

    return {postRestaurant}
}