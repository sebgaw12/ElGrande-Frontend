import {createContext, useCallback, useEffect, useState} from "react";
import {JWTTOKEN} from "../constants/constant";
import {ApiCustomer} from "../api/ApiCustomer";

const defaultUserContext = {
    currentUser: null,
    userModifier: (user) => {
    },
};
export const UserContext = createContext(defaultUserContext)
export const UserContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const userModifier = (user) => setCurrentUser(user)
    const loginModifier = (value) => setIsLoggedIn(value)

    const fetchUser = useCallback((id) => {
        ApiCustomer.getCustomerById(id).then(response => {
            userModifier({
                email: response.email,
                name: response.name
            })
        })
    }, [])

    useEffect(() => {
        const customerId = localStorage.getItem("c_id")

        if (customerId && !currentUser) {
            fetchUser(customerId)
        }
    }, [currentUser])

    return (
        <UserContext.Provider value={{currentUser, userModifier, isLoggedIn, loginModifier}}>
            {children}
        </UserContext.Provider>
    )
}
