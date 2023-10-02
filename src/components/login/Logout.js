import {useNavigate} from "react-router-dom";
import {ACCESS_TOKEN} from "../../constants/constant";
import {toast} from "react-toastify";
import React, {useContext} from "react";
import {UserContext} from "../../context/UserContextProvider";

const Logout = () => {

    const navigate = useNavigate()
    const {loginModifier} = useContext(UserContext);

    const handleLogout = async () => {
        try {
            localStorage.removeItem(ACCESS_TOKEN)
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
        <button className="bg-white text-blue-500 hover:bg-blue-100 text-sm px-3 py-1 rounded-lg
        h-[2.1vh] w-[4.5vw] min-w-[1vw]"
                onClick={handleLogout}>
            Wyloguj
        </button>
    )
}

export default Logout
