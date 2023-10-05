import React, {useCallback, useContext, useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import FoodSpotLogo from "../restaurantform/elements/graphics/FoodSpotLogo";
import RememberMeCheckbox from "../restaurantform/elements/form/RememberMeCheckbox";
import ForgotPasswordLink from "../restaurantform/elements/form/ForgotPasswordLink";
import FacebookLongButton from "../restaurantform/elements/social/FacebookLongButton";
import TwitterLongButton from "../restaurantform/elements/social/TwitterLongButton";
import IconArrowTurnLeft from '../restaurantform/elements/icons/IconArrowTurnLeft';
import {StyleRoundedBlueButton} from '../../styles/styles';
import {TEInput} from 'tw-elements-react';
import {UserContext} from "../../context/UserContextProvider";
import {ApiCustomer} from "../../api/ApiCustomer";
import {ACCESS_TOKEN, LOGGED_IN} from "../../constants/constant";
import {toast} from "react-toastify";

function UserLoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const {userModifier, loginModifier} = useContext(UserContext)

    const onLoginClicked = useCallback(() => {
        ApiCustomer.logIn({email, password}).then(response => {
            localStorage.setItem(ACCESS_TOKEN, JSON.stringify(response))
            localStorage.setItem(LOGGED_IN, 'true')
            userModifier({...response.data})
            loginModifier(true)
            toast.success('zalogowano poprawnie', {
                position: "top-center"
            })
            navigate('/main-page')
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
                    <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                        <TEInput
                            type="email"
                            label="Email"
                            placeholder="john@doe.com"
                            className="mb-6"
                            size="lg"
                            name="email"
                            onChange={(e) => onUsernameChange(e)}
                        ></TEInput>
                        <TEInput
                            type="password"
                            label="Password"
                            placeholder="password"
                            className="mb-6"
                            size="lg"
                            name="password"
                            onChange={(e) => onPasswordChange(e)}
                        ></TEInput>
                        <div className="mb-6 flex items-center justify-between">
                            <RememberMeCheckbox/>
                            <ForgotPasswordLink/>
                        </div>
                        {/*<TERipple rippleColor="light" className="w-full">*/}
                            <button onClick={onLoginClicked}>
                                Sign in
                            </button>
                        {/*</TERipple>*/}
                        {/*// <!-- Divider -->*/}
                        <div
                            className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                            <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                OR
                            </p>
                        </div>
                        <FacebookLongButton/>
                        <TwitterLongButton/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserLoginForm;