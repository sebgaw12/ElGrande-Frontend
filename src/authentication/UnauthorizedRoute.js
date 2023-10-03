import {ACCESS_TOKEN} from "../constants/constant";
import UserDetails from "../components/user/UserDetails";
import {Navigate} from "react-router-dom";


export const UnauthorizedRoute = ({children}) => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
        return <Navigate to={"/profile"} replace />
    }
    return (children)
}
