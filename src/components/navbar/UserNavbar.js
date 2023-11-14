import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard, faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import UserLogout from "./UserLogout";
import {Link} from "react-router-dom";
import {PROFILE_URL, RESTAURANT} from "../../constants/RoutePaths";

const UserNavbar = () => {
    return (
        <>
            <Link to={RESTAURANT}>
                <span>
                    <FontAwesomeIcon icon={faCirclePlus}/>
                    ADD PLACE
                </span>
            </Link>
            <Link to={PROFILE_URL}>
                <span>
                    <FontAwesomeIcon icon={faAddressCard}/>
                    PROFILE
                </span>
            </Link>

            <UserLogout/>
        </>
    )
}

export default UserNavbar
