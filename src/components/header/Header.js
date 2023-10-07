import React, {useContext, useEffect} from 'react';
import {UserContext} from "../../context/UserContextProvider";
import UserHeader from "./userheader/UserHeader";
import DefaultHeader from "./defaultheader/DefaultHeader";
import {Link} from "react-router-dom";
import {LOGGED_IN} from "../../constants/constant";

const Header = () => {
    const isLoggedInInLocalStorage = localStorage.getItem(LOGGED_IN) === 'true'
    const {isLoggedIn, loginModifier} = useContext(UserContext)

    useEffect(() => {
        loginModifier(isLoggedInInLocalStorage)
    }, [isLoggedInInLocalStorage])

    return (
        <header className="bg-blue-500 h-[5vh] flex justify-between">
            <Link to={"/"}>
                <h1 className="text-white font-bold text-4xl ml-5">FoodSpot</h1>
            </Link>
            {isLoggedIn ? (
                <UserHeader/>
            ) : (
                <DefaultHeader/>
            )}
        </header>
    )
};

export default Header;
