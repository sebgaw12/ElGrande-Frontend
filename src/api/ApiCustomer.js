import axios from "axios";
import {SERVER_URL} from "../constants/constant";

export class ApiCustomer {
    static getCustomerById = (id) => {
        return axios.get(SERVER_URL + `api/v1/customers/${id}`)
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

    static getCustomerFromJwtToken = (token) => {
        return axios.get(SERVER_URL + "api/v1/auths", {
            params: {
                jwt: token
            }
        })
            .then(response => {
                if (response.status !== 200) {
                    throw new Error("Network response was not ok");
                }
                return response.data
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                throw error;
            });
    }

    static getCustomerFromOAuth2Token = () => {
        return axios.get(SERVER_URL + "api/v1/auths/oauth2")
            .then(response => {
                if (response.status !== 200) {
                    throw new Error("Network response was not ok");
                }
                return response.data
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                throw error;
            });
    }

    static logIn = (data) => {
        return axios.post(SERVER_URL + "api/v1/auths/login", {
                email: data.email,
                password: data.password
            },
            {
                headers: {
                    'Content-Type': "application/json"
                }
            })
            .then(response => {
                if (response.status !== 200) {
                    throw new Error("Network response was not ok");
                }
                return response.data;
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                throw error;
            });
    }


    static signUp = (data) => {
        return axios.post(SERVER_URL + "api/v1/auths/signup", {
            name: data.name,
            surname: data.surname,
            email: data.email,
            password: data.password
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

    static editCustomer = (data) => {
        return axios.put(SERVER_URL + `api/v1/customers/${data.customerId}`, {
            name: data.name,
            surname: "surname"
        }, {
            headers: {
                'Content-Type': "application/json"
            },
            withCredentials: true
        })
            .then(response => {
                if (response.status !== 201) {
                    throw new Error("Network response was not ok")
                }
                return response.data
            })
            .catch(error => {
                console.error("Error updating data: ", error)
                throw error
            })
    }

    static deleteCustomer = (id) => {
        return axios.delete(SERVER_URL + `api/v1/customers/${id}`)
            .then(response => {
                if (response.status !== 204) {
                    throw new Error("Network response was not no content")
                }
                return response.data
            })
            .catch(error => {
                console.error("Error deleting data: ", error)
                throw error
            })
    }
}