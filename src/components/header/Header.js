import React, {useContext} from 'react';
import {UserContext} from "../../context/UserContextProvider";
import UserHeader from "./userheader/UserHeader";
import DefaultHeader from "./defaultheader/DefaultHeader";

const Header = () => {
    const {isLoggedIn} = useContext(UserContext)

    return (
        <header className="bg-blue-500 flex-grow p-1 h-[5vh]">
            {isLoggedIn ? (
                <UserHeader/>
            ) : (
                <DefaultHeader/>
            )}
        </header>
    )
};

export default Header;
