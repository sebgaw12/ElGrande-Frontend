import {useState} from "react";

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

    const setLocalStorage = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedLocalStorage) : value
            setStoredLocalStorage(valueToStore)
            localStorage.setItem(key, JSON.stringify(valueToStore))
        } catch (error) {
            console.error(error)
        }
    }

    const removeLocalStorage = (nameValue) => {
        localStorage.removeItem(nameValue)
    }

    const createLocalStorage = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value))
    }

    const getLocalStorage = () => {
        return JSON.parse(localStorage.getItem(key))
    }

    return {storedLocalStorage, setLocalStorage, removeLocalStorage, createLocalStorage, getLocalStorage}
}