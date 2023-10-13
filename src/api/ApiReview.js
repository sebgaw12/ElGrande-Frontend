import axios from "axios";
import {SERVER_URL} from "../constants/RoutePaths";


export class ApiReview {
    static getReviewByRestaurantId = (id) => {
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

    static getReviewsByUserId = (id) => {
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

    static postReview = (data) => {
        return axios.post(SERVER_URL + "api/v1/reviews", {
            restaurantId: data.restaurantId,
            customerId: data.customerId,
            comment: data.comment,
            grade: data.grade
        }, {
            headers: {
                "Content-Type": "application/json"
            }
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

    static deleteReview = (reviewId) => {
        return axios.delete(SERVER_URL + `api/v1/reviews/${reviewId}`)
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

}