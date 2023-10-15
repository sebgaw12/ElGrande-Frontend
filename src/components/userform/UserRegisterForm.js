import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {ApiCustomer, useApiUser} from "../../api/ApiCustomer";
import {TEInput, TERipple} from "tw-elements-react";
import {StyleLongButton} from "../../styles/styles";
import Divider from "../restaurantform/elements/form/Divider";
import GoogleIcon from "../restaurantform/elements/social/GoogleIcon";
import {LOGIN_URL, SERVER_URL_GOOGLE} from "../../constants/RoutePaths";
import {toast} from "react-toastify";
import {useApiAuth} from "../../api/ApiAuth";

const UserRegisterForm = () => {
    const {signupUser} = useApiAuth()
    const [userCredentials, setUserCredentials] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        passwordRepeat: ""
    });
    const navigate = useNavigate();

    const onCredentialsChange = (e) => {
        setUserCredentials({
            ...userCredentials,
            [e.target.name]: e.target.value
        })
    }

    const onSignupClicked = (e) => {
        e.preventDefault()

        if (userCredentials.password === userCredentials.passwordRepeat) {
            signupUser(userCredentials)
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
        <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <form onSubmit={onSignupClicked}>
                <TEInput
                    type="text"
                    label="Name"
                    placeholder="Name"
                    className="mb-6"
                    size="lg"
                    name="name"
                    value={userCredentials.name}
                    onChange={onCredentialsChange}
                ></TEInput>
                <TEInput
                    type="text"
                    label="Surname"
                    placeholder="Surname"
                    className="mb-6"
                    size="lg"
                    name="surname"
                    value={userCredentials.surname}
                    onChange={onCredentialsChange}
                ></TEInput>
                <TEInput
                    type="email"
                    label="Email"
                    placeholder="Email"
                    className="mb-6"
                    size="lg"
                    name="email"
                    value={userCredentials.email}
                    onChange={onCredentialsChange}
                ></TEInput>
                <TEInput
                    type="password"
                    label="Password"
                    placeholder="Password"
                    className="mb-6"
                    size="lg"
                    name="password"
                    value={userCredentials.password}
                    onChange={onCredentialsChange}
                ></TEInput>
                <TEInput
                    type="password"
                    label="Repeat Password"
                    placeholder="Repeat Password"
                    className="mb-6"
                    size="lg"
                    name="passwordRepeat"
                    value={userCredentials.passwordRepeat}
                    onChange={onCredentialsChange}
                ></TEInput>
                <div className="mb-6 flex items-center justify-between">
                    <span>Masz już konto? <Link to={"/login"}>Zaloguj się!</Link></span>
                </div>
                <TERipple rippleColor="light" className="w-full">
                    <button type="submit" className={StyleLongButton}>
                        Sign up
                    </button>
                </TERipple>
                {/* <!-- Divider --> */}
                <Divider/>
                {/* todo: dont use google login*/}
                {/*<Link to={SERVER_URL_GOOGLE}>*/}
                {/*    <GoogleIcon/>*/}
                {/*</Link>*/}
            </form>
        </div>
    );
}

export default UserRegisterForm;