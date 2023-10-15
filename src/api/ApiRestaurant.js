import axios from "axios";
import qs from 'qs';
import {SERVER_URL} from "../constants/RoutePaths";

export const useApiRestaurant = () => {
    const getDetailedRestaurantById = (id) => {
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

    const getRestaurantByUserId = (id) => {
        return axios.get(SERVER_URL + "api/v1/restaurants", {
            params: {
                customerId: id
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

    const getAllRestaurant = (page, size, sort) => {
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

    const getFilteredRestaurant = (data) => {
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

    return {getAllRestaurant, getRestaurantByUserId, getFilteredRestaurant, getDetailedRestaurantById}
}