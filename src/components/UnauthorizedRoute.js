import {ACCESS_TOKEN} from "../constants/constant";
import CustomerDetails from "./customer/CustomerDetails";


export const UnauthorizedRoute = ({children}) => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
        return <CustomerDetails />
    }
    return <>{children}</>
}
