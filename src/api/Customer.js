import axios from "axios";

export class Customer {
    static logIn = (data) => {
        return axios.post("http://127.0.0.1:8080/api/v1/auths/login", {
                data: JSON.stringify(data)
            },
            {
                headers: {
                    'Content-Type': "application/json"
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

    static signUp = (data) => {
        return axios.post("http://127.0.0.1:8080/api/v1/auths/signup", {
                data: JSON.stringify(data)
            }, {
                headers: {
                    'Content-Type': "application/json"
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