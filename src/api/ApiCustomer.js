import axios from "axios";
import {SERVER_URL} from "../constants/RoutePaths";

export const useApiUser = () => {

    const getUserById = (id) => {
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


    const editUser = (data, customerId) => {
        return axios.put(SERVER_URL + `api/v1/customers/${customerId}`,
            JSON.stringify(data), {
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

    const deleteUserById = (id) => {
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

    return {getUserById, deleteUserById, editUser}
}