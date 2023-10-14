import {createContext, useCallback, useEffect, useState} from "react";
import {ApiCustomer} from "../api/ApiCustomer";
import {JSESSIONID, JWT_TOKEN, LOGGED_IN} from "../constants/constant";

const defaultUserContext = {
    currentUser: null,
    userModifier: () => {},
};
export const UserContext = createContext(defaultUserContext)
export const UserContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const userModifier = (user) => setCurrentUser(user)
    const loginModifier = (value) => setIsLoggedIn(value)

    const fetchUserFromJwt = useCallback((token) => {
        ApiCustomer.getCustomerFromJwtToken(token).then(response => {
            userModifier({
                email: response.email,
                name: response.name,
                customerId: response.id
            })
            localStorage.setItem(LOGGED_IN, 'true')
        }).catch(error => {

        })
    }, [])

    const fetchUserFromOAuth2 = useCallback(() => {
        ApiCustomer.getCustomerFromOAuth2Token().then(response => {
            userModifier({
                email: response.email,
                name: response.name,
                customerId: response.id
            })
            localStorage.setItem(LOGGED_IN, 'true')
        }).catch(error => {

        })
    }, [])

    const getUser = () => {
        const cookies = document.cookie.split("; ")
        for (const cookie of cookies) {
            const [name, value] = cookie.split('=')
            if (name === JWT_TOKEN) {
                fetchUserFromJwt(value)
            } else if (name === JSESSIONID) {
                fetchUserFromOAuth2()
            }
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <UserContext.Provider value={{currentUser, userModifier, isLoggedIn, loginModifier, getUser}}>
            {children}
        </UserContext.Provider>
    )
}
