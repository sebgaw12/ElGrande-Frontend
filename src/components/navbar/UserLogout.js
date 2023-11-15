import {useNavigate} from "react-router-dom";
import {useUserContext} from "../../context/UserContextProvider";
import {toast} from "react-toastify";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {NavbarOverlaySpan} from "./Navbar.styles";
import {MAIN_PAGE} from "../../constants/RoutePaths";

const UserLogout = ({isMenuActive}) => {

    const navigate = useNavigate()
    const {logout} = useUserContext()

    const handleLogout = () => {
        try {
            logout()
            navigate(MAIN_PAGE)
            toast.success('Logout correctly', {
                position: "top-center"
            })
        } catch (error) {
            toast.error(`There's error occurred`, {
                position: "top-center"
            })
        }
    }

    return (
        <NavbarOverlaySpan onClick={(e) => {
            isMenuActive ? handleLogout() : e.preventDefault()
        }}>
            <FontAwesomeIcon icon={faRightFromBracket}/>
            LOGOUT
        </NavbarOverlaySpan>
    )

}

export default UserLogout
