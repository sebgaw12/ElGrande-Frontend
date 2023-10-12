import {Navigate} from "react-router-dom";
import {LOGGED_IN} from "../constants/constant";
import {LOGIN} from "../constants/RoutePaths";

export const ProtectedRoute = ({children}) => {
    if (!localStorage.getItem(LOGGED_IN)) {
        return <Navigate to={LOGIN} replace />
    }
    return (children)
}
