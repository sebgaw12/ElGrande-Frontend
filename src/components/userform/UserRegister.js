import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useApi} from "../../hooks/useApi";
import {useUpdate} from "../../hooks/useUpdate";
import {LOGIN_URL, SERVER_URL_GOOGLE} from "../../constants/RoutePaths";
import {toast} from "react-toastify";
import {GoogleButton, RedirectText, SubmitFormButton, UserForm, UserPage} from "./UserForm.styles";
import {PrimaryBtn, PrimaryInput} from "../../styles/global.styles";
import Divider from "../globalcomponents/Divider";
import FoodSpotLogo from "../../styles/FoodSpotLogo";
import BackButton from "../globalcomponents/BackButton";

function UserRegister() {
    const {post} = useApi()
    const [userCredentials, setUserCredentials] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        passwordRepeat: ""
    });
    const navigate = useNavigate();
    const {updateDataObject} = useUpdate(userCredentials, setUserCredentials)

    const onSignupClicked = (e) => {
        e.preventDefault()

        if (userCredentials.password === userCredentials.passwordRepeat) {
            post("api/v1/auths/jwt/signup", userCredentials)
                .then(() => {
                    navigate(LOGIN_URL)
                })
                .catch(error => {
                    toast.error(error.response.data.errorMessage, {
                        position: "top-center"
                    })
                })
        } else {
            toast.error("Hasła się nie zgadzają!", {
                position: "top-center"
            })
        }
    }

    return (
        <UserPage>
            <FoodSpotLogo/>
            <UserForm>
                <BackButton/>
                <PrimaryInput type={"text"} placeholder={"Name"} onChange={updateDataObject}></PrimaryInput>
                <PrimaryInput type={"text"} placeholder={"Surname"} onChange={updateDataObject}></PrimaryInput>
                <PrimaryInput type={"text"} placeholder={"E-Mail"} onChange={updateDataObject}></PrimaryInput>
                <PrimaryInput type={"text"} placeholder={"Password"} onChange={updateDataObject}></PrimaryInput>
                <PrimaryInput type={"text"} placeholder={"Repeat Password"} onChange={updateDataObject}></PrimaryInput>
                <SubmitFormButton onClick={onSignupClicked}>Sign Up</SubmitFormButton>
                Already have an account?
                <Link to={LOGIN_URL}>
                    <RedirectText>Log in!</RedirectText>
                </Link>
                <Divider text={"OR"}></Divider>
                <Link to={SERVER_URL_GOOGLE}>
                    <GoogleButton>Continue with Google</GoogleButton>
                </Link>
            </UserForm>
        </UserPage>
    );
}

export default UserRegister;
