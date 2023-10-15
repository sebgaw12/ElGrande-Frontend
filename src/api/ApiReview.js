import axios from "axios";
import {SERVER_URL} from "../constants/RoutePaths";


export const useApiReview = () => {
    const getAllReviewByRestaurantId = (id) => {
        return axios.get(SERVER_URL + 'api/v1/reviews/details', {
            params: {
                restaurantId: id
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

    const getReviewByUserId = (id) => {
        return axios.get(SERVER_URL + 'api/v1/reviews', {
            params: {
                customerId: id
            },
            withCredentials: true
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

    const postReview = (data) => {
        return axios.post(SERVER_URL + "api/v1/reviews",
            JSON.stringify(data), {
                headers: {
                    "Content-Type": "application/json"
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

    const deleteReviewById = (reviewId) => {
        return axios.delete(SERVER_URL + `api/v1/reviews/${reviewId}`, {
            withCredentials: true
        })
            .then(response => {
                if (response.status !== 204) {
                    throw new Error("Network response was not no content");
                }
                return response.data;
            })
            .catch(error => {
                console.error("Error deleting data: ", error);
                throw error;
            });
    }
    return {deleteReviewById, postReview, getAllReviewByRestaurantId, getReviewByUserId}
}