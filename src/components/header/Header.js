import React, {useContext, useEffect} from 'react';
import {UserContext, useUserContext} from "../../context/UserContextProvider";
import UserHeader from "./userheader/UserHeader";
import DefaultHeader from "./defaultheader/DefaultHeader";
import {Link} from "react-router-dom";
import {LOGGED_IN} from "../../constants/Constant";

const Header = () => {
    const {user} = useUserContext()

    return (
        <header className="bg-blue-500 h-[5vh] flex justify-between">
            <Link to={"/"}>
                <h1 className="text-white font-bold text-4xl ml-5">FoodSpot</h1>
            </Link>
            {user ? (
                <UserHeader/>
            ) : (
                <DefaultHeader/>
            )}
        </header>
    )
};

export default Header;
