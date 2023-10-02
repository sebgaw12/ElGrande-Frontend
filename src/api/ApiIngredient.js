import axios from "axios";

export class ApiIngredient {
    static getIngredients = async () => {
        await axios.get("http://127.0.0.1:8080/api/v1/ingredients")
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