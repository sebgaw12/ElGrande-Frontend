import {TEInput} from "tw-elements-react";
import ForgotPasswordLink from "../restaurantform/elements/form/ForgotPasswordLink";
import Divider from "../restaurantform/elements/form/Divider";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useApiCustomer} from "../../api/ApiCustomer";
import {toast} from "react-toastify";
import {MAIN_PAGE} from "../../constants/RoutePaths";
import {useUserContext} from "../../context/UserContextProvider";

const UserLoginForm = () => {
    const {logIn} = useApiCustomer()
    const [userCredentials, setUserCredentials] = useState(
        {
            email: "",
            password: ""
        }
    )
    const navigate = useNavigate()
    const {login} = useUserContext()

    const onLoginClicked = () => {
        logIn(userCredentials).then(response => {
            login(response)
            navigate(MAIN_PAGE)
            toast.success('Zalogowano poprawnie!', {
                position: "top-center"
            })
        }).catch((error) => {
            console.error(error)
            toast.error('Podałeś niepoprawne dane, spróbuj ponownie', {
                position: "top-center"
            })
        })
    }

    const onCredentialsChange = (e) => {
        setUserCredentials({
            ...userCredentials,
            [e.target.name]: e.target.value
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
                onChange={(e) => onCredentialsChange(e)}
            ></TEInput>
            <TEInput
                type="password"
                label="Password"
                placeholder="password"
                className="mb-6"
                size="lg"
                name="password"
                onChange={(e) => onCredentialsChange(e)}
            ></TEInput>
            <div className="mb-6 flex items-center justify-between">
                <ForgotPasswordLink/>
            </div>
            <button onClick={onLoginClicked}>
                Sign in
            </button>
            <Divider text={'OR'}/>
            {/* todo: dont use google login*/}
            {/*<Link to={SERVER_URL_GOOGLE}>*/}
            {/*    <GoogleIcon/>*/}
            {/*</Link>*/}
        </div>
    )
}

export default UserLoginForm
