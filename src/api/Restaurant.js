import axios from "axios";

export class Restaurant {
    static getRestaurantDetailsById = (id) => {
        return axios.get(`http://localhost:8080/api/v1/restaurants/${id}`)
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

    static getAllRestaurants = (page, size, sort) => {
        return axios.get(`http://localhost:8080/api/v1/restaurants?page=${page}&size=${size}&sort=${sort}`)
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