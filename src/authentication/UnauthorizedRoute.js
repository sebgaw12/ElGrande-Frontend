import {LOGGED_IN} from "../constants/constant";
import {Navigate} from "react-router-dom";
import {PROFILE} from "../constants/RoutePaths";


export const UnauthorizedRoute = ({children}) => {
    if (localStorage.getItem(LOGGED_IN)) {
        return <Navigate to={PROFILE} replace/>
    }
    return (children)
}
