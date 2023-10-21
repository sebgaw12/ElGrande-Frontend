import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import React from "react";
import {useUserContext} from "../../context/UserContextProvider";

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
        <button className="m-1 bg-white text-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-lg"
                onClick={handleLogout}>
            Wyloguj
        </button>
    )
}

export default UserLogout
