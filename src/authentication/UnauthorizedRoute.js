import {ACCESS_TOKEN} from "../constants/constant";
import UserDetails from "../components/user/UserDetails";


export const UnauthorizedRoute = ({children}) => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
        return <UserDetails />
    }
    return <>{children}</>
}
