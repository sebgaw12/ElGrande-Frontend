import {createContext, useContext, useState} from "react";
import {CUSTOMER_ID, JWT_TOKEN, REFRESH_TOKEN} from "../constants/UserCredentials";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {useApi} from "../hooks/useApi";
import {toast} from "react-toastify";

const UserContext = createContext()
export const useUserContext = () => {
    return useContext(UserContext)
}
export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const {post, get} = useApi()
    const {
        storedItem: customerId, setLocalStorage: setCustomerId,
        removeLocalStorage: removeCustomerId
    } = useLocalStorage(CUSTOMER_ID, '')
    const {
        storedItem: jwtToken, setLocalStorage: setJwtToken,
        removeLocalStorage: removeJwtToken
    } = useLocalStorage(JWT_TOKEN, '')
    const {
        storedItem: refreshToken, setLocalStorage: setRefreshToken,
        removeLocalStorage: removeRefreshToken
    } = useLocalStorage(REFRESH_TOKEN, '')

    const login = (userCredentials) => {
        post("api/v1/auths/jwt/login", userCredentials)
            .then(response => {
                setJwtToken(response.type + " " + response.accessToken)
                setCustomerId(response.customerId)
                setRefreshToken(response.refreshToken)
                setUser(response.customerId)
                toast.success('Zalogowano poprawnie!', {
                    position: "top-center"
                })
            })
            .catch((error) => {
                console.error(error)
                toast.error('Podałeś niepoprawne dane, spróbuj ponownie', {
                    position: "top-center"
                })
            })
    }

    const logout = () => {
        post("api/v1/auths/jwt/logout")
            .then(() => {
                removeJwtToken(JWT_TOKEN)
                removeRefreshToken(REFRESH_TOKEN)
                removeCustomerId(CUSTOMER_ID)
                setUser(null)
            })
    }

    const authenticate = () => {
        if (customerId) {
            setUser(customerId)
        } else if (!customerId) {
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
        <UserContext.Provider value={{user, login, logout, authenticate}}>
            {children}
        </UserContext.Provider>
    )
}
