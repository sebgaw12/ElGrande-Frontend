import UserLogout from "../../userform/UserLogout";
import {Link} from "react-router-dom";
import React from "react";

const UserHeader = () => {
    return (
        <div className="container mx-auto flex justify-between items-center">
            <Link to={"/"}>
                <h1 className="text-white font-bold text-xl">FoodSpot</h1>
            </Link>
            <nav className="hidden md:flex space-x-4">
                <Link to="/restaurant">
                    <button className="bg-white text-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2
                    px-4 rounded-lg">
                        Dodaj restaurację
                    </button>
                </Link>

                <Link to="/profile">
                    <button className="bg-white text-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2
                    px-4 rounded-lg">
                        Moje konto
                    </button>
                </Link>
                <UserLogout/>
            </nav>
        </div>
    )
}

export default UserHeader
