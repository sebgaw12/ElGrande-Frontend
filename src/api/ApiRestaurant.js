import axios from "axios";
import qs from 'qs';
import {SERVER_URL} from "../constants/constant";

export class ApiRestaurant {
    static getRestaurantDetailsById = (id) => {
        return axios.get(SERVER_URL + `api/v1/restaurants/${id}`)
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

    static getRestaurantsByUserId = (id) => {
        return axios.get(SERVER_URL + `api/v1/restaurants?customerId=${id}`)
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
        return axios.get(SERVER_URL + 'api/v1/restaurants', {
            params: {
                page: page,
                size: size,
                sort: sort
            }
        })
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

    static getFilteredRestaurants = (data) => {
        return axios.get(SERVER_URL + 'api/v1/restaurants/filtered', {
            params:
                {
                    category: data.category,
                    city: data.city,
                    dishName: data.dishName,
                    reviewMin: data.reviewMin,
                    reviewMax: data.reviewMax,
                    reviewSort: data.reviewSort
                },
            paramsSerializer: params => {
                return qs.stringify(params, {arrayFormat: "repeat"});
            }
        })
            .then(response => {

                if (response.status !== 200) {
                    throw new Error("Network response was not created")
                }
                return response.data
            })
            .catch(error => {
                console.error("Error fetching data: ", error)
                throw error
            })
    }
}