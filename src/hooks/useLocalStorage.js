import {useState} from "react";

/**
 * Hooks for managing local storage
 *
 * @param {String} key - name of a variable in local storage
 * @param {String} initValue - initial value of key
 * @returns {{setLocalStorage: setLocalStorage, storedLocalStorage: (any), getLocalStorage: (function(): any), removeLocalStorage: removeLocalStorage, createLocalStorage: createLocalStorage}}
 */
export const useLocalStorage = (key, initValue) => {
    const [storedLocalStorage, setStoredLocalStorage] = useState(() => {
        try {
            const item = localStorage.getItem(key)
            return item ? JSON.parse(item) : initValue;
        } catch (error) {
            console.error(error)
            return initValue
        }
    })

    /**
     * Sets new value to local storage
     *
     * @param value - new value of a key
     */
    const setLocalStorage = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedLocalStorage) : value
            setStoredLocalStorage(valueToStore)
            localStorage.setItem(key, JSON.stringify(valueToStore))
        } catch (error) {
            console.error(error)
        }
    }


    /**
     * Removes item from local storage base on provided value
     *
     * @param nameValue - name of a variable from local storage
     */
    const removeLocalStorage = (nameValue) => {
        localStorage.removeItem(nameValue)
    }

    /**
     * Sets new item to local storage
     *
     * @param key - name of a new item in local storage
     * @param value - value of that item
     */
    const createLocalStorage = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value))
    }

    /**
     * Gets item from local storage based on a key
     *
     * @returns {any}
     */
    const getLocalStorage = () => {
        return JSON.parse(localStorage.getItem(key))
    }

    return {storedLocalStorage, setLocalStorage, removeLocalStorage, createLocalStorage, getLocalStorage}
}