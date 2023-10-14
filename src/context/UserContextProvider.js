import {createContext, useContext, useState} from "react";
import {useCookie} from "../hooks/useCookie";
import {CUSTOMER_ID, JWT_TOKEN, REFRESH_TOKEN} from "../constants/Constant";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {ApiCustomer, useApiUser} from "../api/ApiCustomer";
import {useApiAuth} from "../api/ApiAuth";

const UserContext = createContext()
export const useUserContext = () => {
    return useContext(UserContext)
}

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const {logoutUser} = useApiAuth()
    const {setCookie, removeCookie} = useCookie(JWT_TOKEN, null)
    const {
        storedLocalStorage, setLocalStorage,
        removeLocalStorage, createLocalStorage
    } = useLocalStorage(CUSTOMER_ID, null)

    const login = (userData) => {
        setCookie(userData.token)
        setLocalStorage(userData.customerId)
        createLocalStorage(REFRESH_TOKEN, userData.refreshToken)
        setUser(userData.customerId)
    }

    const logout = async () => {
        await logoutUser()
        removeCookie(JWT_TOKEN)
        removeLocalStorage(REFRESH_TOKEN)
        removeLocalStorage(CUSTOMER_ID)
        setUser(null)
    }

    const authenticate = () => {
        if (storedLocalStorage) {
            setUser(storedLocalStorage)
        }
    }

    return (
        <UserContext.Provider value={{user, login, logout, authenticate}}>
            {children}
        </UserContext.Provider>
    )
}
