import {useNavigate} from "react-router-dom";
import {JWT_TOKEN} from "../../constants/constant";
import {toast} from "react-toastify";
import React, {useContext} from "react";
import {UserContext} from "../../context/UserContextProvider";

const UserLogout = () => {

    const navigate = useNavigate()
    const {loginModifier} = useContext(UserContext);

    const handleLogout = async () => {
        try {
            localStorage.removeItem(JWT_TOKEN)
            toast.success('wylogowano poprawnie', {
                position: "top-center"
            })
            loginModifier(false)
            navigate('/main-page')
        } catch (error) {
            toast.error('wystąpił błąd', {
                position: "top-center"
            })
        }
    }

    return (
        <button className="m-1 bg-white text-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-lg"
                onClick={handleLogout}>
            Wyloguj
        </button>
    )
}

export default UserLogout
