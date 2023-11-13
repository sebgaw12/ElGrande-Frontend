import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {MAIN_PAGE, SERVER_URL_GOOGLE, SIGNUP_URL} from "../../constants/RoutePaths";
import {useUserContext} from "../../context/UserContextProvider";
import {useUpdate} from "../../hooks/useUpdate";
import {PrimaryBtn, PrimaryInput} from "../../styles/global.styles";
import Divider from "../restaurantform/elements/form/Divider";
import {GoogleButton, UserForm} from "./UserForm.styles";

const UserLoginForm = () => {
    const [userCredentials, setUserCredentials] = useState(
        {
            email: "",
            password: ""
        })
    const {updateDataObject} = useUpdate(userCredentials, setUserCredentials)
    const navigate = useNavigate()
    const {login} = useUserContext()
    const onLoginClicked = () => {
        console.log(userCredentials)
        login(userCredentials)
        navigate(MAIN_PAGE)
    }

    return (
        <UserForm>
            <PrimaryInput type={"text"} name={"email"} placeholder={"E-mail"} onChange={updateDataObject}/>
            <PrimaryInput type={"password"} name={"password"} placeholder={"Password"} onChange={updateDataObject}/>
            <PrimaryBtn onClick={onLoginClicked}>Log In</PrimaryBtn>
            Still not a user? <Link to={SIGNUP_URL}>Sign in!</Link>
            <Divider text={"OR"}></Divider>
            <Link to={SERVER_URL_GOOGLE}>
                <GoogleButton>Continue with Google</GoogleButton>
            </Link>
        </UserForm>
    )
}

export default UserLoginForm
