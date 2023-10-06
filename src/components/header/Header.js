import React, {useContext} from 'react';
import {UserContext} from "../../context/UserContextProvider";
import UserHeader from "./userheader/UserHeader";
import DefaultHeader from "./defaultheader/DefaultHeader";
import {Link} from "react-router-dom";

const Header = () => {
    const {isLoggedIn} = useContext(UserContext)

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
