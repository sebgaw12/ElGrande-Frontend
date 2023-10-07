import UserLogout from "../../userform/UserLogout";
import {Link} from "react-router-dom";
import React from "react";

const UserHeader = () => {
    return (
        <nav className="hidden md:flex space-x-4">
            <Link to="/restaurant">
                <button className="m-1 bg-white text-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2
                    px-4 rounded-lg">
                    Dodaj restaurację
                </button>
            </Link>
            <Link to="/profile">
                <button className="m-1 bg-white text-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2
                    px-4 rounded-lg">
                    Moje konto
                </button>
            </Link>
            <UserLogout/>
        </nav>
    )
}

export default UserHeader
