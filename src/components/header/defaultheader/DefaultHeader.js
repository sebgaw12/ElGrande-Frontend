import {Link} from "react-router-dom";
import React from "react";
import {LOGIN_URL, SIGNUP_URL} from "../../../constants/RoutePaths";

const DefaultHeader = () => {
    return (
        <nav className="hidden md:flex space-x-4">
            <Link to={SIGNUP_URL}>
                <button
                    className="m-1 bg-white text-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-lg">
                    Zarejestruj się
                </button>
            </Link>
            <Link to={LOGIN_URL}>
                <button
                    className="m-1 bg-white text-blue-500 hover:bg-blue-700  hover:text-white font-bold py-2 px-4 rounded-lg">
                    Zaloguj się
                </button>
            </Link>
        </nav>
    )
}

export default DefaultHeader
