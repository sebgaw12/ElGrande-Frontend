import {Link} from "react-router-dom";
import React from "react";

const DefaultHeader = () => {
    return (
        <div className="container mx-auto flex justify-between items-center">
            <Link to={"/"}>
                <h1 className="text-white font-bold text-xl">FoodSpot</h1>
            </Link>
            <nav className="hidden md:flex space-x-4">
                <Link to="/register">
                    <button
                        className="bg-white text-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-lg">
                        Zarejestruj się
                    </button>
                </Link>
                <Link to="/login">
                    <button
                        className="bg-white text-blue-500 hover:bg-blue-700  hover:text-white font-bold py-2 px-4 rounded-lg">
                        Zaloguj się
                    </button>
                </Link>
            </nav>
        </div>
    )
}

export default DefaultHeader
