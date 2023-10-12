import React, {useCallback, useContext, useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import FoodSpotLogo from "../restaurantform/elements/graphics/FoodSpotLogo";
import IconArrowTurnLeft from '../restaurantform/elements/icons/IconArrowTurnLeft';
import {StyleRoundedBlueButton} from '../../styles/styles';
import {UserContext} from "../../context/UserContextProvider";
import {ApiCustomer} from "../../api/ApiCustomer";
import {LOGGED_IN} from "../../constants/constant";
import {toast} from "react-toastify";
import {MAIN_PAGE} from "../../constants/RoutePaths";
import LoginForm from "./LoginForm";

function UserLoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const {userModifier, loginModifier} = useContext(UserContext)

    const onLoginClicked = useCallback(() => {
        ApiCustomer.logIn({email, password}).then(response => {
            localStorage.setItem(LOGGED_IN, 'true')
            userModifier({...response.data})
            loginModifier(true)
            toast.success('zalogowano poprawnie', {
                position: "top-center"
            })
            navigate(MAIN_PAGE)
        }).catch(() => {
            toast.error('podałeś niepoprawne dane, spróbuj ponownie', {
                position: "top-center"
            })
        })
    }, [email, password, navigate])

    const onUsernameChange = (ev) => {
        setEmail(ev.target.value)
    }

    const onPasswordChange = (ev) => {
        setPassword(ev.target.value)
    }

    return (
        <section className="h-screen">

            <div className="container h-full px-6 py-24">

                <Link to={"/"}>
                    <button className={StyleRoundedBlueButton}>
                        <IconArrowTurnLeft/>
                    </button>
                </Link>

                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">

                    {/* <!-- Left column container with background--> */}
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                        <FoodSpotLogo/>
                    </div>

                    {/* <!-- Right column container with form --> */}
                    <LoginForm onUsernameChange={onUsernameChange} onPasswordChange={onPasswordChange} onLoginClicked={onLoginClicked}/>

                </div>
            </div>
        </section>
    );
}

export default UserLoginForm;
