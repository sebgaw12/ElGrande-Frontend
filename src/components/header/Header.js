import React, {useContext} from 'react';
import {UserContext} from "../../context/UserContextProvider";
import UserHeader from "./userheader/UserHeader";
import DefaultHeader from "./defaultheader/DefaultHeader";

const Header = () => {
    const {isLoggedIn} = useContext(UserContext)

    return (
        <>
            {isLoggedIn ? (
                <UserHeader/>
            ) : (
                <DefaultHeader/>
            )}
        </>
    )
};

export default Header;
