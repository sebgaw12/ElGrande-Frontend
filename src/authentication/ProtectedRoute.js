import {Navigate} from "react-router-dom";
import {JWT_TOKEN} from "../constants/constant";

export const ProtectedRoute = ({children}) => {
    if (!localStorage.getItem(JWT_TOKEN)) {
        return <Navigate to={"/login"} replace />
    }
    return (children)
}
