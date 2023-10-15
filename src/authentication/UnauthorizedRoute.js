import {Navigate} from "react-router-dom";
import {PROFILE_URL} from "../constants/RoutePaths";
import {useUserContext} from "../context/UserContextProvider";


export const UnauthorizedRoute = ({children}) => {
    const {user} = useUserContext()
    if (user) {
        return <Navigate to={PROFILE_URL} replace/>
    }
    return (children)
}
