import {createContext, useContext, useState} from "react";
import {useCookie} from "../hooks/useCookie";
import {CUSTOMER_ID, JWT_TOKEN, REFRESH_TOKEN} from "../constants/UserCredentials";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {useApi} from "../hooks/useApi";

const UserContext = createContext()
export const useUserContext = () => {
    return useContext(UserContext)
}
export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const {post, get} = useApi()
    const {storedCookie, setCookie, removeCookie} = useCookie(JWT_TOKEN, '')
    const {
        storedLocalStorage, setLocalStorage,
        removeLocalStorage, createLocalStorage
    } = useLocalStorage(CUSTOMER_ID, '')

    const login = (userData) => {
        setCookie(userData.token)
        setLocalStorage(userData.customerId)
        createLocalStorage(REFRESH_TOKEN, userData.refreshToken)
        setUser(userData.customerId)
    }

    const removeUserCredentialsFromStorage = () => {
        removeCookie(JWT_TOKEN)
        removeLocalStorage(REFRESH_TOKEN)
        removeLocalStorage(CUSTOMER_ID)
        setUser(null)
    }

    const logout = () => {
        post("api/v1/auths/jwt/logout")
            .then(() => {
                removeCookie(JWT_TOKEN)
                removeLocalStorage(REFRESH_TOKEN)
                removeLocalStorage(CUSTOMER_ID)
                setUser(null)
            })
    }

    const authenticate = () => {
        if (storedLocalStorage) {
            setUser(storedLocalStorage)
        } else if (!storedCookie) {
            get("api/v1/auths/oauth2")
                .then(response => {
                    login(response)
                })
                .catch(() => {
                    console.error("OAuth2 authentication failed")
                })
        }
    }

    return (
        <UserContext.Provider value={{user, login, logout, authenticate, removeUserCredentialsFromStorage}}>
            {children}
        </UserContext.Provider>
    )
}
