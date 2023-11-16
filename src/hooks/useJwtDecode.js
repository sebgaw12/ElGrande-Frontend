import jwt_decode from "jwt-decode"

/**
 * Hook for managing jwt_decode library
 * @returns {{hasTokenExpired: ((function(*): boolean)|*)}}
 */
export const useJwtDecode = () => {

    /**
     * Takes full token with beginning "Bearer " then strips it and compare its
     * exp with date.now()
     *
     * @param {String} token - Token with "Bearer " prefix
     * @returns {boolean} - True if token expired otherwise false
     */
    const hasTokenExpired = (token) => {
        if (token === null) {
            return false
        }
        const tokenExp = jwt_decode(token.substring(7)).exp - 10
        const currentTime = Math.floor(Date.now() / 1000)
        return tokenExp < currentTime

    }
    return {hasTokenExpired}
}