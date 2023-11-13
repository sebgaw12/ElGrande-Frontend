import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {TEInput, TERipple} from "tw-elements-react";
import {StyleLongButton} from "../../styles/styles";
import Divider from "../restaurantform/elements/form/Divider";
import {LOGIN_URL, SERVER_URL_GOOGLE} from "../../constants/RoutePaths";
import {toast} from "react-toastify";
import {useUpdate} from "../../hooks/useUpdate";
import {useApi} from "../../hooks/useApi";
import GoogleIcon from "../restaurantform/elements/social/GoogleIcon";
import {GoogleButton, UserForm} from "./UserForm.styles";
import {PrimaryBtn, PrimaryInput} from "../../styles/global.styles";

const UserRegisterForm = () => {
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
        <UserForm>
            <PrimaryInput type={"text"} placeholder={"Name"} onChange={updateDataObject}></PrimaryInput>
            <PrimaryInput type={"text"} placeholder={"Surname"} onChange={updateDataObject}></PrimaryInput>
            <PrimaryInput type={"text"} placeholder={"E-Mail"} onChange={updateDataObject}></PrimaryInput>
            <PrimaryInput type={"text"} placeholder={"Password"} onChange={updateDataObject}></PrimaryInput>
            <PrimaryInput type={"text"} placeholder={"Repeat Password"} onChange={updateDataObject}></PrimaryInput>
            <PrimaryBtn onClick={onSignupClicked}>Sign Up</PrimaryBtn>
            Already have an account? <Link to={LOGIN_URL}>Log in!</Link>
            <Divider text={"OR"}></Divider>
            <Link to={SERVER_URL_GOOGLE}>
                <GoogleButton>Continue with Google</GoogleButton>
            </Link>
        </UserForm>
        // <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
        //     <form onSubmit={onSignupClicked}>
        //         <TEInput
        //             type="text"
        //             label="Name"
        //             placeholder="Name"
        //             className="mb-6"
        //             size="lg"
        //             name="name"
        //             value={userCredentials.name}
        //             onChange={updateDataObject}
        //         ></TEInput>
        //         <TEInput
        //             type="text"
        //             label="Surname"
        //             placeholder="Surname"
        //             className="mb-6"
        //             size="lg"
        //             name="surname"
        //             value={userCredentials.surname}
        //             onChange={updateDataObject}
        //         ></TEInput>
        //         <TEInput
        //             type="email"
        //             label="Email"
        //             placeholder="Email"
        //             className="mb-6"
        //             size="lg"
        //             name="email"
        //             value={userCredentials.email}
        //             onChange={updateDataObject}
        //         ></TEInput>
        //         <TEInput
        //             type="password"
        //             label="Password"
        //             placeholder="Password"
        //             className="mb-6"
        //             size="lg"
        //             name="password"
        //             value={userCredentials.password}
        //             onChange={updateDataObject}
        //         ></TEInput>
        //         <TEInput
        //             type="password"
        //             label="Repeat Password"
        //             placeholder="Repeat Password"
        //             className="mb-6"
        //             size="lg"
        //             name="passwordRepeat"
        //             value={userCredentials.passwordRepeat}
        //             onChange={updateDataObject}
        //         ></TEInput>
        //         <div className="mb-6 flex items-center justify-between">
        //             <span>Masz już konto? <Link to={"/login"}>Zaloguj się!</Link></span>
        //         </div>
        //         <TERipple rippleColor="light" className="w-full">
        //             <button type="submit" className={StyleLongButton}>
        //                 Sign up
        //             </button>
        //         </TERipple>
        //         {/* <!-- Divider --> */}
        //         <Divider/>
        //         <Link to={SERVER_URL_GOOGLE}>
        //             <GoogleIcon/>
        //         </Link>
        //     </form>
        // </div>
    );
}

export default UserRegisterForm;