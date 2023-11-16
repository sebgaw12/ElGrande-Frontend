import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileSignature, faKey} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {LOGIN_URL, SIGNUP_URL} from "../../constants/RoutePaths";
import {Link} from "react-router-dom";
import {NavbarOverlaySpan} from "./Navbar.styles";

const DefaultNavbar = ({handleClickIfMenuHidden}) => {

    return (
        <>
            <Link to={LOGIN_URL}>
                <NavbarOverlaySpan onClick={handleClickIfMenuHidden}>
                    <FontAwesomeIcon icon={faKey}/>
                    LOG IN
                </NavbarOverlaySpan>
            </Link>
            <Link to={SIGNUP_URL}>
                <NavbarOverlaySpan onClick={handleClickIfMenuHidden}>
                    <FontAwesomeIcon icon={faFileSignature}/>
                    SIGN IN
                </NavbarOverlaySpan>
            </Link>
            <span></span>
        </>
    )
}

export default DefaultNavbar
