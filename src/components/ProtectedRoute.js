import {ACCESS_TOKEN} from "../constants/constant";
import {Navigate} from "react-router-dom";

export const ProtectedRoute = ({children}) => {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return <Navigate to={"/login"} replace />
    }
    return <>{children}</>
}
