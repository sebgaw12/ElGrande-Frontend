import {useNavigate} from "react-router-dom";
import {useUserContext} from "../../context/UserContextProvider";
import {toast} from "react-toastify";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {NavbarOverlaySpan} from "./Navbar.styles";

const UserLogout = ({isMenuActive}) => {

    const navigate = useNavigate()
    const {logout} = useUserContext()

    const handleLogout = () => {
        try {
            logout()
            navigate('/main-page')
            toast.success('Wylogowano poprawnie', {
                position: "top-center"
            })
        } catch (error) {
            toast.error('Wystąpił błąd podczas wylogowywania', {
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
