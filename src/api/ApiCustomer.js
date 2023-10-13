import axios from "axios";
import {SERVER_URL} from "../constants/RoutePaths";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {REFRESH_TOKEN} from "../constants/Constant";

export const useApiCustomer = () => {
    const {getLocalStorage, setLocalStorage} = useLocalStorage(REFRESH_TOKEN, "")

    const getCustomerById = (id) => {
        return axios.get(SERVER_URL + `api/v1/customers/${id}/details`, {
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

    const logOut = () => {
        return axios.post(SERVER_URL + "api/v1/auths/jwt/logout", {}, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        })
            .then(response => {
                if (response.status !== 204) {
                    throw new Error("Network response was not created")
                }
            })
            .catch(error => {
                console.error("Error fetching data: " + error)
                throw error
            })
    }

    const refreshToken = () => {
        console.log(getLocalStorage())
        return axios.post(SERVER_URL + "api/v1/auths/jwt/refresh", {
            token: getLocalStorage()
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (response.status !== 200) {
                    throw new Error("Network response was not ok")
                }
                console.log(response)
                setLocalStorage(response.data.refreshToken)
            })
            .catch(error => {
                console.error("Error fetching data: " + error)
                throw error
            })
    }

    const logIn = (data) => {
        return axios.post(SERVER_URL + "api/v1/auths/jwt/login", {
                email: data.email,
                password: data.password
            },
            {
                headers: {
                    'Content-Type': "application/json"
                }
            })
            .then(response => {
                if (response.status !== 201) {
                    throw new Error("Network response was not ok");
                }
                return response.data;
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                throw error;
            });
    }


    const signUp = (data) => {
        return axios.post(SERVER_URL + "api/v1/auths/jwt/signup", {
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

    const editCustomer = (data, customerId) => {
        return axios.put(SERVER_URL + `api/v1/customers/${customerId}`, {
            name: data.name,
            surname: data.surname
        }, {
            headers: {
                'Content-Type': "application/json"
            },
            withCredentials: true
        })
            .then(response => {
                if (response.status !== 201) {
                    throw new Error("Network response was not created")
                }
                return response
            })
            .catch(error => {
                console.error("Error fetching data: ", error)
                throw error
            })
    }

    const deleteCustomer = (id) => {
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

    return {getCustomerById, logOut, logIn, signUp, refreshToken, deleteCustomer, editCustomer}
}