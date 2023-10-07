import {Navigate} from "react-router-dom";
import {LOGGED_IN, SERVER_URL_LOGIN} from "../constants/constant";

export const ProtectedRoute = ({children}) => {
    if (!localStorage.getItem(LOGGED_IN)) {
        return <Navigate to={SERVER_URL_LOGIN} replace />
    }
    return (children)
}
