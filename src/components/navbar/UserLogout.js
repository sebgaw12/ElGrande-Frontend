import {useNavigate} from "react-router-dom";
import {useUserContext} from "../../context/UserContextProvider";
import {toast} from "react-toastify";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const UserLogout = () => {

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
        <>
            <span onClick={handleLogout}>
                <FontAwesomeIcon icon={faRightFromBracket}/>
                LOGOUT
            </span>
        </>
    )

}

export default UserLogout
