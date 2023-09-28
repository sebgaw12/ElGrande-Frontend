import {createContext, useCallback, useEffect, useState} from "react";
import {ACCESS_TOKEN} from "../constants/constant";

const defaultUserContext = {
    currentUser: null,
    userModifier: (user) => {},
};
export const UserContext = createContext(defaultUserContext)
export const UserContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const userModifier = (user) => setCurrentUser(user)
    const loginModifier = (value) => setIsLoggedIn(value)

    const fetchUser = useCallback(async () =>{
        try{
            const mockUser = require("../mockdata/MockCustomer")
            userModifier({
                email: mockUser.email,
                name: mockUser.name,
                surname: mockUser.surname
            })
        } catch (err) {
            console.error('wystąpił błąd ', err);
        }
    }, [])

    useEffect(() => {
        const token = localStorage.getItem(ACCESS_TOKEN)

        if (token && !currentUser) {
            fetchUser()
        }
    }, [fetchUser, currentUser])

    return (
        <UserContext.Provider value={{currentUser, userModifier, isLoggedIn, loginModifier}}>
            {children}
        </UserContext.Provider>
    )
}
