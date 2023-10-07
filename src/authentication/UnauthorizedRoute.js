import {LOGGED_IN} from "../constants/constant";
import {Navigate} from "react-router-dom";


export const UnauthorizedRoute = ({children}) => {
    if (localStorage.getItem(LOGGED_IN)) {
        return <Navigate to={"/profile"} replace/>
    }
    return (children)
}
