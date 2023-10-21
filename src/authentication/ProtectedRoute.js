import {Navigate} from "react-router-dom";
import {LOGIN_URL} from "../constants/RoutePaths";
import {useUserContext} from "../context/UserContextProvider";

export const ProtectedRoute = ({children}) => {
    const {user} = useUserContext()
    if (!user) {
        return <Navigate to={LOGIN_URL} replace/>
    }
    return (children)
}
