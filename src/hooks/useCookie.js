import Cookies from "js-cookie"
import {useState} from "react";

export const useCookie = (name, initValue) => {
    const [storedCookie, setStoredCookie] = useState(() => {
        try {
            const item = Cookies.get(name)
            return item ? item : initValue
        } catch (error) {
            console.error(error)
            return initValue
        }
    })

    const setCookie = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedCookie) : value
            setStoredCookie(valueToStore)
            Cookies.set(name, value)
        } catch (error) {
            console.error(error)
        }
    }

    const removeCookie = (nameValue) => {
        Cookies.remove(nameValue)
    }

    return {storedCookie, setCookie, removeCookie}
}