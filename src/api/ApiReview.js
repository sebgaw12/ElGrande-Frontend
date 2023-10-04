import axios from "axios";

export class ApiReview {
    static getReviewByRestaurantId = (id) => {
        return axios.get(`http://localhost:8080/api/v1/reviews?restaurantId=${id}`)
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
        return axios.get(`http://localhost:8080/api/v1/reviews?customerId=${id}`)
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
    static postReview = (restaurantId, customerId, comment, grade) => {
        return axios.post("http://localhost:8080/api/v1/reviews", {
            restaurantId: restaurantId,
            customerId: customerId,
            comment: comment,
            grade: grade
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
}