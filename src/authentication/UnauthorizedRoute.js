import {JWT_TOKEN} from "../constants/constant";
import {Navigate} from "react-router-dom";


export const UnauthorizedRoute = ({children}) => {
    if (localStorage.getItem(JWT_TOKEN)) {
        return <Navigate to={"/profile"} replace/>
    }
    return (children)
}
