import React, {useState} from "react";
import FoodSpotLogo from "../../styles/FoodSpotLogo";
import {GoogleButton, RedirectText, SubmitFormButton, UserForm, UserPage} from "./UserForm.styles";
import BackButton from "../globalcomponents/BackButton";
import {PrimaryBtn, PrimaryInput} from "../../styles/global.styles";
import {Link, useNavigate} from "react-router-dom";
import {MAIN_PAGE, SERVER_URL_GOOGLE, SIGNUP_URL} from "../../constants/RoutePaths";
import Divider from "../restaurantform/elements/form/Divider";
import {useUpdate} from "../../hooks/useUpdate";
import {useUserContext} from "../../context/UserContextProvider";

const UserLogin = () => {
    const [userCredentials, setUserCredentials] = useState(
        {
            email: "",
            password: ""
        })
    const {updateDataObject} = useUpdate(userCredentials, setUserCredentials)
    const navigate = useNavigate()
    const {login} = useUserContext()
    const onLoginClicked = () => {
        login(userCredentials)
        navigate(MAIN_PAGE)
    }
    return (
        <UserPage>
            <FoodSpotLogo/>
            <UserForm>
                <BackButton/>
                <PrimaryInput type={"text"} name={"email"} placeholder={"E-mail"} onChange={updateDataObject}/>
                <PrimaryInput type={"password"} name={"password"} placeholder={"Password"} onChange={updateDataObject}/>
                <SubmitFormButton onClick={onLoginClicked}>Log In</SubmitFormButton>
                Still not a user?
                <Link to={SIGNUP_URL}>
                    <RedirectText>Sign in!</RedirectText>
                </Link>
                <Divider text={"OR"}></Divider>
                <Link to={SERVER_URL_GOOGLE}>
                    <GoogleButton>Continue with Google</GoogleButton>
                </Link>
            </UserForm>
        </UserPage>
    )
}

export default UserLogin;
