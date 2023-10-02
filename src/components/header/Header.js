import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {UserContext} from "../../context/UserContextProvider";
import {ACCESS_TOKEN} from "../../constants/constant";
import Logout from "../login/Logout";
import RestaurantRegisterBasics from '../restaurantform/subcomponents/RestaurantRegisterBasics';

const Header = () => {
    const {userEmail} = useContext(UserContext)

// todo: find better way to display authorize header

    if (userEmail) {
        return (
            <header className="bg-blue-500 py-2 px-4 flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">FoodSpot</h1>

                <div className="flex items-center space-x-2">
                    <Link to="/restaurant">
                        <button className="bg-white text-blue-500 hover:bg-blue-100 text-sm px-3 py-1 rounded-lg">
                            Dodaj restaurację
                        </button>
                    </Link>

                    <button className="bg-white text-blue-500 hover:bg-blue-100 text-sm px-3 py-1 rounded-lg">
                        <Link to="/profile">
                            Moje konto
                        </Link>
                    </button>

                    <div>
                        <Logout/>
                    </div>

                </div>
            </header>
        )
    }

    return (
        <header className="bg-blue-500 py-2 px-4 flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">FoodSpot</h1>

            <div className="flex items-center space-x-2">
                <Link to="/register">
                    <button className="bg-white text-blue-500 hover:bg-blue-100 text-sm px-3 py-1 rounded-lg">
                        Zarejestruj się
                    </button>
                </Link>

                <button className="bg-white text-blue-500 hover:bg-blue-100 text-sm px-3 py-1 rounded-lg">
                    <Link to="/login">
                        Zaloguj się
                    </Link>

                </button>
            </div>
        </header>
    )
};

export default Header;
