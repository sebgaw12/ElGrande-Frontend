import axios from "axios";

export class BusinessHour {
    static getBusinessHourByRestaurantId = (id) => {
        return axios.get(`http://localhost:8080/api/v1/business-hours?restaurantId=${id}`)
            .then(response => {
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
}