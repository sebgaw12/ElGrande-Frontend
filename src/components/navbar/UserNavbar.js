import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard, faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import UserLogout from "./UserLogout";
import {Link} from "react-router-dom";
import {PROFILE_URL, RESTAURANT} from "../../constants/RoutePaths";
import {NavbarOverlaySpan} from "./Navbar.styles";

const UserNavbar = ({isMenuActive, handleClickIfMenuHidden}) => {
    return (
        <>
            <Link to={RESTAURANT}>
                <NavbarOverlaySpan  onClick={handleClickIfMenuHidden}>
                    <FontAwesomeIcon icon={faCirclePlus}/>
                    ADD PLACE
                </NavbarOverlaySpan>
            </Link>
            <Link to={PROFILE_URL}>
                <NavbarOverlaySpan onClick={handleClickIfMenuHidden}>
                    <FontAwesomeIcon icon={faAddressCard}/>
                    PROFILE
                </NavbarOverlaySpan>
            </Link>

            <UserLogout/>
        </>
    )
}

export default UserNavbar
