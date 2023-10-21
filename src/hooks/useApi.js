import axios from "axios";
import {SERVER_URL} from "../constants/RoutePaths";
import {useLocalStorage} from "./useLocalStorage";
import {JWT_TOKEN, REFRESH_TOKEN} from "../constants/UserCredentials";
import {useCookie} from "./useCookie";
import qs from "qs";

/**
 * Hooks for with interceptors that returns a {response.data} from axios library
 * @returns {{post: (function(*, *): Promise<axios.AxiosResponse<any>>), get: (function(*, *): Promise<axios.AxiosResponse<any>>), remove: (function(*): Promise<axios.AxiosResponse<any>>), put: (function(*, *): Promise<axios.AxiosResponse<any>>)}}
 */
export const useApi = () => {
    const {storedLocalStorage, setLocalStorage} = useLocalStorage(REFRESH_TOKEN, '')
    const {setCookie} = useCookie(JWT_TOKEN, '')
    const axiosInstance = axios.create()
    // todo {jwt-decode library} to make 2 request instead of 3 by checking expiration time of a token
    axiosInstance.interceptors.request.use(config => {
        config.baseURL = SERVER_URL
        config.withCredentials = true
        return config
    })

    axiosInstance.interceptors.response.use(response => {
        return response.data
    }, error => {
        const {config, response} = error;

        if (response.status === 401) {
            return post("api/v1/auths/jwt/refresh", {token: storedLocalStorage})
                .then(response => {
                    setLocalStorage(response.refreshToken)
                    setCookie(response.accessToken)
                    return axiosInstance(config)
                })
                .catch(error => {
                    console.error("Error fetching data from refreshing token endpoint: " + error)
                })
        }
        return Promise.reject(error)
    })

    /**
     * Axios.get which provides server url and only require url of endpoint
     * like "api/v1/...", it takes params as an object with right values
     *
     * @param {String} urlEndpoint - End of url endpoint without server url
     * @param {Object} params - Object with right data as an url params
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    const get = (urlEndpoint, params) => {
        return axiosInstance.get(urlEndpoint, {
            params: params,
            paramsSerializer: params => {
                return qs.stringify(params)
            }
        })
            .then(response => {
                return response
            })
            .catch(error => {
                console.error("Error fetching data from get method: " + error)
                throw error
            })
    }

    /**
     * Axios.post which provides server url and only require url of endpoint
     * like "api/v1/...", it takes data as an object with right values
     *
     * @param {String} urlEndpoint - End of url endpoint without server url
     * @param {Object} data - Data that will be in body
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    const post = (urlEndpoint, data) => {
        return axiosInstance.post(urlEndpoint,
            JSON.stringify(data), {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                return response
            })
            .catch(error => {
                console.error("Error fetching data from post method: " + error)
                throw error
            })
    }

    /**
     * Axios.put which provides server url and only require url of endpoint
     * like "api/v1/...", it takes data as an object with right values
     *
     * @param {String} urlEndpoint - End of url endpoint without server url
     * @param {Object} data - Data that will be in body
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    const put = (urlEndpoint, data) => {
        return axiosInstance.put(urlEndpoint,
            JSON.stringify(data), {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                return response
            })
            .catch(error => {
                console.error("Error fetching data from put method: " + error)
                throw error
            })
    }

    /**
     * Axios.delete which provides server url and only require url of endpoint
     * like "api/v1/..."
     *
     * @param {String} urlEndpoint - End of url endpoint without server url
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    const remove = (urlEndpoint) => {
        return axiosInstance.delete(urlEndpoint)
            .then(response => {
                return response
            })
            .catch(error => {
                console.error("Error fetching data from delete method: " + error)
                throw error
            })
    }

    return {get, post, remove, put}
}