import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileSignature, faKey} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {LOGIN_URL, SIGNUP_URL} from "../../constants/RoutePaths";
import {Link} from "react-router-dom";

const DefaultNavbar = () => {
    return (
        <>
            <Link to={SIGNUP_URL}>
                <span>
                    <FontAwesomeIcon icon={faKey}/>
                    LOG IN
                </span>
            </Link>
            <Link to={LOGIN_URL}>
                <span>
                    <FontAwesomeIcon icon={faFileSignature}/>
                    SIGN IN
                </span>
            </Link>
            <span></span>
        </>
    )
}

export default DefaultNavbar
