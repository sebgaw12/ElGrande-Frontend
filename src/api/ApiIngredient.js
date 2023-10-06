import axios from "axios";
import {SERVER_URL} from "../constants/constant";

export class ApiIngredient {
    static getIngredients = () => {
        return axios.get(SERVER_URL + "api/v1/ingredients")
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