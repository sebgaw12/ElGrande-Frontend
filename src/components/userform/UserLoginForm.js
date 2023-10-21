import {TEInput} from "tw-elements-react";
import ForgotPasswordLink from "../restaurantform/elements/form/ForgotPasswordLink";
import Divider from "../restaurantform/elements/form/Divider";
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {SERVER_URL_GOOGLE} from "../../constants/RoutePaths";
import {useUserContext} from "../../context/UserContextProvider";
import {useUpdate} from "../../hooks/useUpdate";
import GoogleIcon from "../restaurantform/elements/social/GoogleIcon";
import {useApi} from "../../hooks/useApi";

const UserLoginForm = () => {
    const [userCredentials, setUserCredentials] = useState(
        {
            email: "",
            password: ""
        })
    const {updateDataObject} = useUpdate(userCredentials, setUserCredentials)
    const navigate = useNavigate()
    const {post} = useApi()
    const {login} = useUserContext()
    const onLoginClicked = () => {
        post("api/v1/auths/jwt/login", userCredentials)
            .then(response => {
                login(response)
                navigate("/")
                toast.success('Zalogowano poprawnie!', {
                    position: "top-center"
                })
            })
            .catch((error) => {
                console.error(error)
                toast.error('Podałeś niepoprawne dane, spróbuj ponownie', {
                    position: "top-center"
                })
            })
    }

    return (
        <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <TEInput
                type="email"
                label="Email"
                placeholder="john@doe.com"
                className="mb-6"
                size="lg"
                name="email"
                onChange={updateDataObject}
            ></TEInput>
            <TEInput
                type="password"
                label="Password"
                placeholder="password"
                className="mb-6"
                size="lg"
                name="password"
                onChange={updateDataObject}
            ></TEInput>
            <div className="mb-6 flex items-center justify-between">
                <ForgotPasswordLink/>
            </div>
            <button onClick={onLoginClicked}>
                Sign in
            </button>
            <Divider text={'OR'}/>

            <Link to={SERVER_URL_GOOGLE}>
                <GoogleIcon/>
            </Link>
        </div>
    )
}

export default UserLoginForm
