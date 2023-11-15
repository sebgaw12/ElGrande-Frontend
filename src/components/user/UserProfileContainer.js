import React, {useEffect, useState} from 'react';
import {useUserContext} from "../../context/UserContextProvider";
import {useApi} from "../../hooks/useApi";
import UserDetails from "./UserDetails";
import UserContributeDetails from "./UserContributeDetails";
import {UserProfileGrid, UserProfileHeader} from "./UserProfile.styles";
import {NavbarStyle} from "../mainpage/MainPage.styles";
import Navbar from "../navbar/Navbar";

const UserProfileContainer = () => {
    const {user} = useUserContext();
    const {get} = useApi();
    const [userDetails, setUserDetails] = useState({
        name: undefined,
        surname: undefined,
        email: undefined,
        submissionTime: null,
        ownershipId: null
    });

    useEffect(() => {
        get("api/v1/customers/" + user + "/details", {})
            .then(response => setUserDetails(response))
    }, []);

    return (
        <UserProfileGrid>
            <UserProfileHeader>
                <NavbarStyle>
                    <Navbar/>
                </NavbarStyle>
            </UserProfileHeader>
            <UserDetails userDetails={userDetails}/>
            <UserContributeDetails userDetails={userDetails}/>
        </UserProfileGrid>
    )
}

export default UserProfileContainer;
