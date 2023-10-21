import Cookies from "js-cookie"
import {useState} from "react";

/**
 * Hook for managing cookies
 *
 * @param {String} name - name of a cookie
 * @param {String} initValue - initial value of a cookie
 * @returns {{removeCookie: removeCookie, setCookie: setCookie, storedCookie: (*)}}
 */
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

    /**
     * Sets a new value for a cookie based on a name
     *
     * @param value
     */
    const setCookie = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedCookie) : value
            setStoredCookie(valueToStore)
            Cookies.set(name, value)
        } catch (error) {
            console.error(error)
        }
    }
    /**
     * Removes a cookie based on a parameter name
     *
     * @param nameValue
     */
    const removeCookie = (nameValue) => {
        Cookies.remove(nameValue)
    }

    return {storedCookie, setCookie, removeCookie}
}